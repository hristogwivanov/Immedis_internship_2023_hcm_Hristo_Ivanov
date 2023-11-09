const Service = require('./Service');

class UserService extends Service {
    constructor() {
        super();
        this.endpoints = {
            'login': '/user/login',
            'logout': '/user/logout',
        }
    }

    async login(input) {
        console.log(input);
        console.log(this.endpoints.login)
        const user = await this.postReq("/user/login", input);
        return user;
    }
}


const userService = new UserService();
module.exports = userService; 