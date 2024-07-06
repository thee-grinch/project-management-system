const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true
    },
    location: {
        type: Schema.Types.String,
        required: true
    },
    subcounty: {
        type: Schema.Types.String,
        required: true
    },
    financialYear: {
        type: Schema.Types.String,
        required: true
    },
    status: {
        type: Schema.Types.String,
        enum: ['todo', 'in-progress', 'done'],
        // isIn: {
        //     options: ['todo', 'in-progress', 'done'],
        //     errorMessage: 'Status should be either todo, in-progress or done',
        // },
        required: true
    },
    remarks: {
        type: Schema.Types.String,
        required: true
    },
    description: {
        type: Schema.Types.String,
        required: true
    },
})

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;