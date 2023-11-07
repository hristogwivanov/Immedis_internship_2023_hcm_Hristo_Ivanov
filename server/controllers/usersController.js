const router = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware');
const usersService = require('../services/usersService');
const { getErrorMessage } = require('../utils/errorUtils');

router.get('/allusers', isAuth, async (req, res) => {
    currentUserType = req.user?.type;
    if (currentUserType === "admin") {
        const users = await usersService.getAllUsers();
        res.render('users/allusers', { users })
    }
    else { res.render('home/unauthorized'); }

})
router.get('/:userId/edit', isAuth, async (req, res) => {
    const currentUserType = req.user?.type;
    if (currentUserType === "admin") {
        const user = await usersService.getOne(req.params.userId);
        isHR = (user.type === "hr");
        if (user.type === "admin") {
            const users = await usersService.getAllUsers();
            return res.status(400).render('users/allusers', { error: "Admin details cannot be changed from the UI", users })
        }
        res.render('users/edit', { user, isHR });
    }
    else { res.render('home/unauthorized'); }
});

router.post('/:userId/edit', isAuth, async (req, res) => {
    const userData = req.body;
    try {
        await usersService.editUser(req.params.userId, userData);
        const users = await usersService.getAllUsers();
        res.redirect('/users/allusers');
    }catch(error){
        res.status(400).render('/:userId/edit', {error: getErrorMessage(error) })
    }

});


module.exports = router; 