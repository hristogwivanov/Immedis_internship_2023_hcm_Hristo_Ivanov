const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    emplID: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    firstName: {
        type: String, 
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    phoneNumber: { 
        type: String 
    },
    dateOfBirth: {
        type: Date
    },
    hireDate: {
        type: Date,
        required: true
    },
    department: {
        type: mongoose.Types.ObjectId,
        ref: 'Department'
    },
    role: {
        type: mongoose.Types.ObjectId,
        ref: 'Role' 
    },
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;