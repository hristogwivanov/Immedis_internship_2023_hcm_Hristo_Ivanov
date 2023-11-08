const router = require('express').Router();
const mongoose = require('mongoose');

const authService = require('../services/authService');
const { isAuth } = require('../middlewares/authMiddleware');
const { getErrorMessage } = require('../utils/errorUtils');


router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body; 

    try{
        const token = await authService.login(email, password);
        const currentUser = await authService.findByEmail(email)
        if (currentUser.type !== 'admin'){
            throw new Error(`Unauthorized! Only admins can log in on the server.`);
        }
        res.cookie('auth', token);
        res.redirect('/');
    } catch (error) {
        return res.status(404).render('auth/login', { error: getErrorMessage(error) })
    }
});

router.get('/adduser', (req, res) => {
    let loggeduser=req.user;
    res.render('auth/adduser', { loggeduser });
});

router.post('/adduser', async (req, res) => {
    const { type, email, password, repeatPassword } = req.body;

    try {
        await authService.addUser(type, email, password, repeatPassword);
        res.redirect('/');
    }catch(error){
        let loggeduser=req.user;
        res.status(400).render('auth/adduser', {loggeduser, error: getErrorMessage(error) })
    }

});



router.get('/logout', isAuth, (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});


module.exports = router; 