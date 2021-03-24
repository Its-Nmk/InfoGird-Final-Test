const mongoose = require('mongoose');

const schema = mongoose.Schema({
    date: {
        type: Date,
        default: Date.now()
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: [{
        category: String,
        city: String
    }],

});

module.exports = mongoose.model('User', schema);