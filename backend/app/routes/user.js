const router = require('express').Router();
const User = require('../Models/userModel');
const { hashPassword } = require('../utils/bcrypt')
const { checkSchema, matchedData, validationResult} = require('express-validator')
const {newUserValidation, loginUserValidation} = require('../Validations/user')
const passport = require('../strategies/localStrategy')


router.post('/api/add-user',  checkSchema(newUserValidation), async (request, response) => {
    const errors = validationResult(request)
    if (request.isAuthenticated() === false) return response.status(400).json({message: 'Login failed'})
    if (!errors.isEmpty()) return response.status(401).json(errors.array())
        console.log(request.user)
    if (request.user.role !== 'admin') return response.status(400).send('unauthorised')
    const user = matchedData(request);
    user.password = await hashPassword(user.password)
    try  {d
        const newUser = User({...user})
        await newUser.save()
        return response.status(201).json(newUser)
    } catch (error){
        console.log(error)
        return response.status(400).send(error)
    } 
})

router.post('/api/login', checkSchema(loginUserValidation), passport.authenticate('local'), async (request, response) => {
    // if (request.isAuthenticated() === false) return response.status(400).json({message: 'Login failed'})
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US',{
        month: 'short',
        day: '2-digit',
        year: 'numeric'
    })
    const username = request.user ? request.user.name : 'user';
    return response.status(200).json({message: 'Login successful'
    })
})

router.get('/api/logout', (request, response) => {
    request.logout()
    return response.status(200).json({message: 'Logout successful'})
})

// router.get('/api/users',async  (request, response) => {
//     if (request.isAuthenticated() === false) return response.status(400).json({message: 'Login failed'})
//     if (request.user.role !== 'admin') return response.status(400).json({"message": "unauthorised"})
//     const { id = null, offset = 10, sortBy = 'role', limit = 10} = request.query;
//     try {
//         const users = await User.find();
//         return response.status(200).json(users)
//     } catch (error) {
//         console.log(error)
//         return response.status(501).json({message: "unable to find users"});
//     }
// })
router.get('/api/users', async (request, response) => {
    if (request.isAuthenticated() === false) return response.status(400).json({message: 'Login failed'})
    if (request.user.role !== 'admin') return response.status(400).json({"message": "unauthorised"})
    
    const { startId = null, sortBy = 'role', direction = 1, limit = 10 } = request.query;

    try {
        const query = startId ? { _id: { $gt: startId } } : {};
        const users = await User.find(query)
            .sort({ [sortBy]: Number(direction) })
            .limit(Number(limit));
        const cleanUsers = users.map(user => {
            const { password, __v, ...cleanUser } = user.toObject();
            return cleanUser;
        });
        return response.status(200).json(cleanUsers);
    } catch (error) {
        console.log(error);
        return response.status(501).json({message: "unable to find users"});
    }
});
router.patch('/api/user/:id', async (request, response) => {
    if (request.isAuthenticated() === false) return response.status(400).json({message: 'Login failed'})
    if (request.user.role !== 'admin') return response.status(400).json({"message": "unauthorised"})
    const { id } = request.params;
    const user = request.body;
    if (user.password) user.password = await hashPassword(user.password);
    try {
        const updatedUser = await User.findByIdAndUpdate(id, { $set: user }, { new: true });
        if (!updatedUser) return response.status(404).json({ message: "User not found" });
        const { password, __v, ...cleanUser } = updatedUser.toObject();
        return response.status(200).json(cleanUser);
    } catch (error) {
        console.log(error);
        return response.status(501).json({ message: "unable to update user" });
    }
})


module.exports = router;