const router = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware');
const usersService = require('../services/usersService');
const { getErrorMessage } = require('../utils/errorUtils');

router.get('/allusers', async (req, res) => {
    const users = await usersService.getAllUsers();
    res.render('users/allusers', { users })
})
router.get('/:userId/details', async (req, res) => {
    const user = await usersService.getOne(req.params.userId);
    res.render('users/details', { user });
});

module.exports = router; 