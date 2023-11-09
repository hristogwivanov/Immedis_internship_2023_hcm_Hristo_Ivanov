const router = require('express').Router();
const authService = require('../services/authService');
const { getErrorMessage } = require('../utils/errorUtils');


const getLogin = async (req, res) => {
    res.render('auth/login');
};

const postLogin = async (req, res) => {

    const input = req.body;
    try {
        // const token = await authService.login(input);
        // const currentUser = await authService.findByEmail(email)
        const user = await authService.login(input);
        console.log("before cookie")
        res.cookie('auth', token);
        //res.redirect('/');
    } catch (error) {
        return res.status(404).render('auth/login', { error: getErrorMessage(error) })
    }
};

router.get('/login', getLogin);
router.post('/login', postLogin);

module.exports = router;
