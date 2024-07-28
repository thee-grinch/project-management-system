const { checkSchema } = require('express-validator');

const taskValidation = {
    name: {
        in: ['body'],
        isString: {
            msg: 'Name must be a string'
        },
        exists: {
            msg: 'Name is required'
        }
    },
    location: {
        in: ['body'],
        isString: {
            msg: 'Location must be a string'
        },
        exists: {
            msg: 'Location is required'
        }
    },
    subcounty: {
        in: ['body'],
        isString: {
            msg: 'Subcounty must be a string'
        },
        exists: {
            msg: 'Subcounty is required'
        }
    },
    financialYear: {
        in: ['body'],
        isString: {
            msg: 'Financial Year must be a string'
        },
        exists: {
            msg: 'Financial Year is required'
        }
    },
    status: {
        in: ['body'],
        isString: {
            msg: 'Status must be a string'
        },
        isIn: {
            options: [['todo', 'in-progress', 'done']],
            msg: 'Status should be either todo, in-progress, or done'
        },
        exists: {
            msg: 'Status is required'
        }
    },
    remarks: {
        in: ['body'],
        isString: {
            msg: 'Remarks must be a string'
        },
        exists: {
            msg: 'Remarks is required'
        }
    },
    description: {
        in: ['body'],
        isString: {
            msg: 'Description must be a string'
        },
        optional: true,
        msg: 'Description is optional'
    }
};

const taskPatchValidation = {
    name: {
        in: ['body'],
        isString: {
            msg: 'Name must be a string'
        },
        optional: true
    },
    location: {
        in: ['body'],
        isString: {
            msg: 'Location must be a string'
        },
        optional: true
    },
    subcounty: {
        in: ['body'],
        isString: {
            msg: 'Subcounty must be a string'
        },
        optional: true
    },
    financialYear: {
        in: ['body'],
        isString: {
            msg: 'Financial Year must be a string'
        },
        optional: true
    },
    status: {
        in: ['body'],
        isString: {
            msg: 'Status must be a string'
        },
        isIn: {
            options: [['todo', 'in-progress', 'done']],
            msg: 'Status should be either todo, in-progress, or done'
        },
        optional: true
    },
    remarks: {
        in: ['body'],
        isString: {
            msg: 'Remarks must be a string'
        },
        optional: true
    },
    description: {
        in: ['body'],
        isString: {
            msg: 'Description must be a string'
        },
        optional: true
    }
};

module.exports = { taskValidation, taskPatchValidation };
