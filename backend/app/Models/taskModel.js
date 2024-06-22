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
        isIn: {
            errorMessage: 'Status should be either todo, in-progress or done',
            options: ['todo', 'in-progress', 'done'],
        },
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