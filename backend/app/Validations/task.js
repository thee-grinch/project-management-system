const { checkSchema } = require('express-validator');

const taskValidation = {
    name: {
        in: ['body'],
        isString: {
            errorMessage: 'Name must be a string'
        },
        exists: {
            errorMessage: 'Name is required'
        }
    },
    location: {
        in: ['body'],
        isString: {
            errorMessage: 'Location must be a string'
        },
        exists: {
            errorMessage: 'Location is required'
        }
    },
    subcounty: {
        in: ['body'],
        isString: {
            errorMessage: 'Subcounty must be a string'
        },
        exists: {
            errorMessage: 'Subcounty is required'
        }
    },
    financialYear: {
        in: ['body'],
        isString: {
            errorMessage: 'Financial Year must be a string'
        },
        exists: {
            errorMessage: 'Financial Year is required'
        }
    },
    status: {
        in: ['body'],
        isString: {
            errorMessage: 'Status must be a string'
        },
        isIn: {
            options: [['todo', 'in-progress', 'done']],
            errorMessage: 'Status should be either todo, in-progress, or done'
        },
        exists: {
            errorMessage: 'Status is required'
        }
    },
    remarks: {
        in: ['body'],
        isString: {
            errorMessage: 'Remarks must be a string'
        },
        exists: {
            errorMessage: 'Remarks is required'
        }
    },
    description: {
        in: ['body'],
        isString: {
            errorMessage: 'Description must be a string'
        },
        optional: true,
        errorMessage: 'Description is optional'
    }
};

const taskPatchValidation = {
    name: {
        in: ['body'],
        isString: {
            errorMessage: 'Name must be a string'
        },
        optional: true
    },
    location: {
        in: ['body'],
        isString: {
            errorMessage: 'Location must be a string'
        },
        optional: true
    },
    subcounty: {
        in: ['body'],
        isString: {
            errorMessage: 'Subcounty must be a string'
        },
        optional: true
    },
    financialYear: {
        in: ['body'],
        isString: {
            errorMessage: 'Financial Year must be a string'
        },
        optional: true
    },
    status: {
        in: ['body'],
        isString: {
            errorMessage: 'Status must be a string'
        },
        isIn: {
            options: [['todo', 'in-progress', 'done']],
            errorMessage: 'Status should be either todo, in-progress, or done'
        },
        optional: true
    },
    remarks: {
        in: ['body'],
        isString: {
            errorMessage: 'Remarks must be a string'
        },
        optional: true
    },
    description: {
        in: ['body'],
        isString: {
            errorMessage: 'Description must be a string'
        },
        optional: true
    }
};

module.exports = { taskValidation, taskPatchValidation };
