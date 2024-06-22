const taskValidation = {
    name: {
        in: ['body'],
        isString: true,
        exists: true,
        errorMessage: 'Name is required'
    },
    location: {
        in: ['body'],
        isString: true,
        exists: true,
        errorMessage: 'Location is required'
    },
    subcounty: {
        in: ['body'],
        isString: true,
        exists: true,
        errorMessage: 'Subcounty is required'
    },
    financialYear: {
        in: ['body'],
        isString: true,
        exists: true,
        errorMessage: 'Financial year is required'
    },
    status: {
        in: ['body'],
        isString: true,
        isIn: {
            errorMessage: "status should be either in to-do, completed , in progres",
            options: ["todo", "in-progress", "done"]
        },
        exists: true,
        errorMessage: 'Status is required'
    },
    remarks: {
        in: ['body'],
        isString: true,
        exists: false,
        errorMessage: 'Remarks is required'
    },
    description: {
        in: ['body'],
        isString: true,
        exists: false,
        errorMessage: 'Description is required'
    }
}
const taskPatchValidation = {
    name: {
        in: ['body'],
        isString: true,
        optional: true,
        errorMessage: 'Name is required'
    },
    location: {
        in: ['body'],
        isString: true,
        optional: true,
        errorMessage: 'Location is required'
    },
    subcounty: {
        in: ['body'],
        isString: true,
        optional: true,
        errorMessage: 'Subcounty is required'
    },
    financialYear: {
        in: ['body'],
        isString: true,
        optional: true,
        errorMessage: 'Financial year is required'
    },
    status: {
        in: ['body'],
        isString: true,
        isIn: {
            errorMessage: "status should be either in to-do, completed , in progres",
            options: ["todo", "in-progress", "done"]
        },
        optional: true,
        errorMessage: 'Status is required'
    },
    remarks: {
        in: ['body'],
        isString: true,
        optional: true,
        errorMessage: 'Remarks is required'
    },
    description: {
        in: ['body'],
        isString: true,
        optional: true,
        errorMessage: 'Description is required'
    }
}
module.exports = {taskValidation, taskPatchValidation};