const User = require('../models/User');

exports.getAllUsers = () => User.find({}).lean();
exports.getOne = (userId) => User.findById(userId).lean();
exports.editUser = (userId, userData) => User.findByIdAndUpdate(userId, userData, {runValidators: true})