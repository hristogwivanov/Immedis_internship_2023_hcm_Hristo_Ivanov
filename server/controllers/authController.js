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
        res.cookie('auth', token);
        res.redirect('/');
    } catch (error) {
        return res.status(404).render('auth/login', { error: getErrorMessage(error) })
    }
});

router.get('/adduser', (req, res) => {
    res.render('auth/adduser');
});

router.post('/adduser', async (req, res) => {
    const { type, email, password, repeatPassword } = req.body;

    try {
        const token = await authService.addUser(type, email, password, repeatPassword);
        res.redirect('/');
    }catch(error){
        console.log('opa')
        res.status(400).render('auth/adduser', {error: getErrorMessage(error) })
    }

});

router.get('/logout', isAuth, (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});

module.exports = router; 