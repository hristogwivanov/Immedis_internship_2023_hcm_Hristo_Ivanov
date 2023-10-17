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