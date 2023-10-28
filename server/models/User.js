const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        minLength: 5, 
        required: [true, 'Email is required']
    },
    password: {
        type: String,
        minLength: 4,
        required: false,
    },
    type: {
        type: String,
        required: false,
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;