const router = require('express').Router();
const Task = require('../Models/taskModel');
const { checkSchema, matchedData, validationResult} = require('express-validator')
const {taskValidation, taskPatchValidation } = require('../Validations/task');
const { request } = require('express');


router.post('/api/add-task',  checkSchema(taskValidation), async (request, response) => {
    if (request.isAuthenticated() === false) return response.status(400).json({message: 'Login failed'})
    const errors = validationResult(request)
    if (!errors.isEmpty()) return response.status(400).json(errors.array())
    const task = matchedData(request);
    try  {
        const newTask = Task({...task})
        await newTask.save()
        return response.status(201).json(newTask)
    } catch (error){
        console.log(error)
        return response.status(400).send(error)
    }
});
router.get('/home-page', async(request, response) => {
    if (request.isAuthenticated() === false) return response.status(401).json({message: 'Login failed'});
    try {
        const username = request.user.username;
        const role = request.user.role;
        const date = new Date().toISOString();
        const completedTasks = await Task.find({ status: 'completed' }).countDocuments();
        const todoTasks = await Task.find({ status: 'todo' }).countDocuments();
        const inProgressTasks = await Task.find({ status: 'in-progress' }).countDocuments();
        const taskCounts = {
            completed: completedTasks,
            todo: todoTasks,
            inProgress: inProgressTasks
        };
        return response.status(200).json({taskCounts, username, role, date });
    } catch (error) {
        console.log(error);
        return response.status(501).json({ message: "unable to load homepage" });
    }
})

router.get('/api/tasks', async (request, response) => {
    if (request.isAuthenticated() === false) return response.status(401).json({message: 'Login failed'})
    const { startId = null, sortBy = 'status', direction = 1, limit = 10 } = request.query;

    try {
        const query = startId ? { _id: { $gt: startId } } : {};
        const tasks = await Task.find(query)
            .sort({ [sortBy]: Number(direction) })
            .limit(Number(limit));
        const cleanTasks = tasks.map(task => {
            return {
                id: task._id,
                title: task.title,
                location: task.location,
                subCounty: task.subCounty,
                financialYear: task.financialYear,
                status: task.status,
                remarks: task.remarks,
                description: task.description,
            }
        })
        
        return response.status(200).json(cleanTasks)
    } catch (error) {
        console.log(error)
        return response.status(501).json({message: "unable to find tasks"});
    }
})

router.get('/api/tasks/:id', async (request, response) => {
    if (request.isAuthenticated() === false) return response.status(401).json({message: 'Login failed'})
    const { id } = request.params;
    try {
        const task = await Task.findById(id);
        return response.status(200).json(task)
    } catch (error) {
        console.log(error)
        return response.status(501).json({message: "unable to find task"});
    }
})

router.put('/api/tasks/:id', checkSchema(taskValidation), async (request, response) => {
    if (request.isAuthenticated() === false) return response.status(401).json({message: 'Login failed'})
    const errors = validationResult(request)
    if (!errors.isEmpty()) return response.status(401).json(errors.array())
    const { id } = request.params;
    const task = request.body;
    try {
        const updatedTask = await Task.findByIdAndUpdate(id, task, {new: true});
        return response.status(200).json(updatedTask)
    } catch (error) {
        console.log(error)
        return response.status(501).json({message: "unable to update task"});
    }
})

router.patch('/api/tasks/:id',  checkSchema(taskPatchValidation), async (request, response) => {
    if (request.isAuthenticated() === false) return response.status(401).json({message: 'Login failed'})
    const errors = validationResult(request)
    if (!errors.isEmpty()) return response.status(401).json(errors.array())
    const { id } = request.params;
    const task = matchedData(request);
    try {
        const updatedTask = await Task.findByIdAndUpdate(id, {$set: task}, {new: true});
        return response.status(200).json(updatedTask)
    } catch (error) {
        console.log(error)
        return response.status(501).json({message: "unable to update task"});
    }
})

router.delete('/api/tasks/:id', async (request, response) => {
    if (request.isAuthenticated() === false) return response.status(401).json({message: 'Login failed'})
    const { id } = request.params;
    try {
        await Task.findByIdAndDelete(id);
        return response.status(200).json({message: "task deleted"})
    } catch (error) {
        console.log(error)
        return response.status(501).json({message: "unable to delete task"});
    }
})


module.exports = router;