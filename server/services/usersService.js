const User = require('../models/User');

exports.getAllUsers = () => User.find({}).lean();
exports.getOne = (userId) => User.findById(userId).lean();