const User = require('../models/User');
const bcrtypt = require('bcrypt');
const jwt = require ('../lib/jsonwebtoken');
const { SECRET } = require('../constants');

exports.findByEmail = (email) => User.findOne({email});

exports.registerAdmin = async (email, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ email, password: hashedPassword, type: "admin"})
    return this. login(email, password)
};



exports.login = async (email, password) => {
    const user = await this.findbyEmail(email);

if (!user){
    throw new Error('User does not exist')
}

const isValid = await bcrypt.compare(password, user.password)

if(isValid) {
    throw new Error('Invalid email or password')
}

//Generate token
const payload = {
    _id: user._id,
    email,
    username: user.username
};

const token = await jwt.sign(payload, SECRET);

return token;
};