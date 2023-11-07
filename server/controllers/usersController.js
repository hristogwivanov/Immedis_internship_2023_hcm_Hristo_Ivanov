const router = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware');
const usersService = require('../services/usersService');
const { getErrorMessage } = require('../utils/errorUtils');

router.get('/allusers', async (req, res) => {
    currentUserType = req.user?.type;
    if(currentUserType === "admin"){
        const users = await usersService.getAllUsers();
        res.render('users/allusers', { users })
    }
    else {res.render('home/unauthorized', {});}

})
router.get('/:userId/edit', async (req, res) => {
    currentUserType = req.user?.type;
    if(currentUserType === "admin"){
        const user = await usersService.getOne(req.params.userId);
        res.render('users/edit', { user });
    }
    else {res.render('home/unauthorized', {});}
});

module.exports = router; 