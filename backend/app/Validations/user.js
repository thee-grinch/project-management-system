const { exists } = require("../Models/userModel")

const newUserValidation = {
    username: {
        in: ['body'],
        isString: true,
        exists: {
            msg: 'Username is required',
            options: { checkFalsy: true , checkNull: true },
        },
        isLength: {
            msg: 'Username should be at least 4 characters long',
            options: { min: 4 }
        }
    },
    password: {
        in: ['body'],
        isString: true,
        exists: {
            msg: 'Password is required',
            options: { checkFalsy: true , checkNull: true },
        },
        isLength: {
            msg: 'Password should be at least 4 characters long',
            options: { min: 4 }
        }
    },
    role: {
        in: ['body'],
        isString: true,
        exists: {
            msg: 'Role is required',
            options: { checkFalsy: true , checkNull: true },
        },
        isIn: {
            msg: 'Role should be either admin, clerk or viewer',
            options: [['admin', 'clerk', 'viewer']]
        }
    }
}

const loginUserValidation = {
    username: {
        in: ['body'],
        isString: true,
        exists: {
            msg: 'Username is required',
            options: { checkFalsy: true , checkNull: true },
        },
        isLength: {
            msg: 'Username should be at least 4 characters long',
            options: { min: 4 }
        }
    },
    password: {
        in: ['body'],
        isString: true,
        exists: {
            msg: 'Password is required',
            options: { checkFalsy: true , checkNull: true },
        },
        isLength: {
            msg: 'Password should be at least 4 characters long',
            options: { min: 4 }
        }
    },
}

module.exports = {
    newUserValidation,
    loginUserValidation
}
