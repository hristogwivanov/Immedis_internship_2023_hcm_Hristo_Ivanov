const Service = require('./Service');
const User = require('../models/User')
const bcrypt = require('bcrypt');
const { SECRET } = require('../constants');


class UserService extends Service {
    constructor(){
        super(User);
    }

    async login(user){
        const existing = await this.model
        .findOne({email: user.email});
        // console.log(user)
        //.collation({ locale: 'en' });
        //console.log (user.email)


        if(!existing || !(await bcrypt.compare(user.password, existing.password))){
            // console.log(user.password);
            // console.log(existing.password);
            throw new Error('Incorrect login details');
        }

        const payload = {
            _id: user._id,
            email,
            type: user.type
        };

        const token = await JsonWebTokenError.sign(payload, SECRET)

        return {
            username: existing.username,
            _id: existing._id,
            role: existing.role,
            employeeId: existing.employeeId,
            token,
        };
    }
}

module.exports = new UserService();