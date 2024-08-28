const router = require('express').Router();
const Task = require('../Models/taskModel');
const User = require('../Models/userModel')
const { checkSchema, matchedData, validationResult} = require('express-validator')
const {taskValidation, taskPatchValidation } = require('../Validations/task');


router.post('/api/add-task',  checkSchema(taskValidation), async (request, response) => {
    console.log('api called')
    // if (request.isAuthenticated === false) return response.status(400).json({message: 'Login failed'})
    const errors = validationResult(request)
    if (!errors.isEmpty()) return response.status(400).json({ errors: errors.array().map(error => error.msg) })
    const task = matchedData(request);
    try  {
        console.log('creating task')
        const newTask = Task({...task})
        await newTask.save()
        return response.status(201).json(newTask)
    } catch (error){
        console.log(error)
        return response.status(400).send(error)
    }
});
router.get('/api/home-page', async(request, response) => {
    try {
        const username = request.user.username;
        const role = request.user.role;
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('en-US',{
            month: 'short',
            day: '2-digit',
            year: 'numeric'
        })
        const totalTasks = await Task.find().countDocuments();
        const totalPages = Math.ceil(totalTasks / 10);
        const completedTasks = await Task.find({ status: 'done' }).countDocuments();
        const todoTasks = await Task.find({ status: 'todo' }).countDocuments();
        const inProgressTasks = await Task.find({ status: 'in-progress' }).countDocuments();
        const taskCounts = [
            { name: "Done", total: completedTasks },
            { name: "In Progress", total: inProgressTasks },
            { name: "To Do", total: todoTasks }
        ];
        const { startId = null, sortBy = '', direction = 1, limit = 10} = request.query;
        const query = startId ? { _id: { $gt: startId } } : {};
        const tasks = await Task.find(query)
            // .sort({ [sortBy]: Number(direction) })
            .limit(Number(limit));
        const cleanTasks = tasks.map(task => {
            return {
                id: task._id,
                Name: task.name,
                Location: task.location,
                Subcounty: task.subcounty,
                'Financial Year': task.financialYear,
                Status: task.status,
                Remarks: task.remarks,
                Description: task.description,
            }
        })
        let users;
        if (request.user.role === 'admin') {
            users = await User.find().limit(10);
            // console.log('users', users)
        }
        const cleanUsers = users.map(user => {
            return {
                id: user._id,
                username: user.username,
                role: user.role,
            }
        }
        )

        // console.log('clean users', users)

        return response.status(200).json({taskCounts, username, role, date: formattedDate, tableData: cleanTasks, totalPages ,userData: cleanUsers });
    } catch (error) {
        console.log(error);
        return response.status(501).json({ message: "unable to load homepage" });
    }

})

router.get('/api/tasks', async (request, response) => {
    if (!request.isAuthenticated) return response.status(401).json({message: 'Login failed'});

    const { startId = null, sortBy = 'status', direction = '1', limit = '10' } = request.query;

    try {
        // Convert direction and limit to numbers
        const directionNum = Number(direction);
        const limitNum = Number(limit);

        // Build the query based on startId
        // const query = startId ? { _id: { $gt: startId } } : {};
        let query = {};
        if (startId) {
            query = directionNum === 1 ? { _id: { $gt: startId } } : { _id: { $lt: startId } };
        }
        

        // Fetch tasks from the database with pagination and sorting
        const tasks = await Task.find(query)
            .sort({ [sortBy]: 1})
            .limit(limitNum);

        // Clean and format the response data
        const cleanTasks = tasks.map(task => ({
            id: task._id,
            Name: task.name,
            Location: task.location,
            Subcounty: task.subcounty,
            'Financial Year': task.financialYear,
            Status: task.status,
            Remarks: task.remarks,
            Description: task.description,
        }));

        return response.status(200).json({tableData: cleanTasks});
    } catch (error) {
        console.error(error);
        return response.status(501).json({message: "Unable to find tasks"});
    }
});


router.get('/api/tasks/:id', async (request, response) => {
    if (request.isAuthenticated === false) return response.status(401).json({message: 'Login failed'})
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
    if (request.isAuthenticated === false) return response.status(401).json({message: 'Login failed'})
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
    if (request.isAuthenticated === false) return response.status(401).json({message: 'Login failed'})
    const errors = validationResult(request)
    if (!errors.isEmpty()) return response.status(400).json(errors.array())
        console.log(errors.array())
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
    if (request.isAuthenticated === false) return response.status(401).json({message: 'Login failed'})
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