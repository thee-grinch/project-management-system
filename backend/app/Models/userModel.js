const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: Schema.Types.String,
        required: true,
        unique: true
    },
    password: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    role: {
        type: mongoose.Schema.Types.String,
        enum: ['admin', 'clerk', 'viewer'],
        required: true
    }
})
const User = mongoose.model('User', userSchema);
module.exports = User;