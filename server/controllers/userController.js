const Controller = require('./Controller');
const UserService = require('../services/userService');
const router = require('express').Router();

class UserController extends Controller {
    constructor(){
        super(UserService);
    }

    login = async (req, res) => {
        try {
            console.log(req.body)
            const user = await this.service.login(req.body);
            return res.json(user);
        } catch (error) {
            this.errorResponse(res, error)
        }
    }
}


const userController = new UserController();

router.post('/login', userController.login)

module.exports = router;