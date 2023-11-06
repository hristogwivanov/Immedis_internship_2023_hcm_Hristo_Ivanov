const User = require('..//models/User');

exports.getAllUsers = () => User.find({}).lean();