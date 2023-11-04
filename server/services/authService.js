const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require ('../lib/jsonwebtoken');
const { SECRET } = require('../constants');

exports.findByEmail = (email) => User.findOne({ email });

exports.registerAdmin = async (email, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    const type = "admin";
    await User.create({ email: email, password: password, type: type });
    return
};



exports.login = async (email, password) => {
    const user = await this.findByEmail(email);

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