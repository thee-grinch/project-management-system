const { exists } = require("../Models/userModel")

const newUserValidation = {
    username: {
        in: ['body'],
        isString: true,
        exists: {
            errorMessage: 'Username is required',
            options: { checkFalsy: true , checkNull: true },
        },
        isLength: {
            errorMessage: 'Username should be at least 4 characters long',
            options: { min: 5 }
        }
    },
    password: {
        in: ['body'],
        isString: true,
        exists: {
            errorMessage: 'Password is required',
            options: { checkFalsy: true , checkNull: true },
        },
        isLength: {
            errorMessage: 'Password should be at least 5 characters long',
            options: { min: 5 }
        }
    },
    role: {
        in: ['body'],
        isString: true,
        exists: {
            errorMessage: 'Role is required',
            options: { checkFalsy: true , checkNull: true },
        },
        isIn: {
            errorMessage: 'Role should be either admin, clerk or viewer',
            options: [['admin', 'clerk', 'viewer']]
        }
    }
}

const loginUserValidation = {
    username: {
        in: ['body'],
        isString: true,
        exists: {
            errorMessage: 'Username is required',
            options: { checkFalsy: true , checkNull: true },
        },
        isLength: {
            errorMessage: 'Username should be at least 4 characters long',
            options: { min: 5 }
        }
    },
    password: {
        in: ['body'],
        isString: true,
        exists: {
            errorMessage: 'Password is required',
            options: { checkFalsy: true , checkNull: true },
        },
        isLength: {
            errorMessage: 'Password should be at least 5 characters long',
            options: { min: 5 }
        }
    },
}

module.exports = {
    newUserValidation,
    loginUserValidation
}
