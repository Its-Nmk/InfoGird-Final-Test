const { body } = require('express-validator');

exports.validator = [
    body('firstName')
        .notEmpty().withMessage('Name is required')
        .isAlpha().withMessage('Name should be in Letters only')
        .isLength({ min: 3 }).withMessage("Name should be grater than 3 letters"),

    body('lastName')
        .notEmpty().withMessage('Name is required')
        .isAlpha().withMessage('Name should be in Letters only')
        .isLength({ min: 3 }).withMessage("Name should be grater than 3 letters"),

    body('email')
        .notEmpty().withMessage("email is required")
        .isEmail().withMessage('Please enter Email only'),

    body('phone')
        .notEmpty().withMessage("Phone is required")
        .isMobilePhone().withMessage('Enter Mobile phone only'),

    body('password')
        .notEmpty().withMessage("Password is required")
        .isAlphanumeric().withMessage('Password should be combination of digits and Alphabets')
]

