const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require ('../lib/jsonwebtoken');
const { SECRET } = require('../constants');

exports.findByEmail = (email) => User.findOne({ email });

exports.registerAdmin = async (email, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const type = "admin";
    const existingUser = await User.findOne({
        $or: [
            { email },
        ]
    });

    if(existingUser){
        throw new Error('User exists');
    }
    
    await User.create({ email, password: hashedPassword, type });
    return;
};

exports.addUser = async (type, email, password, repeatPassword) => {
    if(password.length<4){
        throw new Error('Password has to be minimum 4 characters!');

    }
    if(password !== repeatPassword) {
        throw new Error('Password missmatch!');
    }

    const existingUser = await User.findOne({
        $or: [
            { email },
        ]
    });

    if(existingUser){
        throw new Error('User exists');
    }

const hashedPassword = await bcrypt.hash(password, 10);

   await User.create({ email, password: hashedPassword, type });

   return;
};

exports.changePassword = async (userId, passwordInput) => {
    const { password, repeatPassword } = passwordInput
    if(password.length<4){
        throw new Error('Password has to be minimum 4 characters!');

    }
    if(password !== repeatPassword) {
        throw new Error('Password missmatch!');
    }
const hashedPassword = await bcrypt.hash(password, 10);
const passwordData = {password: hashedPassword}

await User.findByIdAndUpdate(userId, passwordData, {runValidators: true} );



}


exports.login = async (email, password) => {
    const user = await this.findByEmail(email);

if (!user){
    throw new Error('User does not exist')
}

const isValid = await bcrypt.compare(password, user.password)

if(!isValid) {
    throw new Error('Invalid email or password')
}

//Generate token
const payload = {
    _id: user._id,
    email,
    type: user.type
};

const token = await jwt.sign(payload, SECRET);

return token;
};