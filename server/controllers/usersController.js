const router = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware');
const usersService = require('../services/usersService');
const authService = require('../services/authService');
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
        res.redirect('/users/allusers');
    } catch (error) {
        const user = await usersService.getOne(req.params.userId);
        let isHR = (user.type === "hr");
        res.render('users/edit', {user, isHR, error})
    }

});


router.get('/:userId/pwchange', isAuth, async (req, res) => {
    const currentUserType = req.user?.type;
    const user = await usersService.getOne(req.params.userId);
    if (currentUserType === "admin") {
        if (user.type === "admin") {
            const users = await usersService.getAllUsers();
            return res.status(400).render('users/allusers', { error: "Admin details cannot be changed from the UI", users })
        }
        res.render('users/pwchange', { user });
    }
    else { res.render('home/unauthorized'); }
});


router.post('/:userId/pwchange', async (req, res) => {
    const passwordData = req.body;
    console.log (passwordData);
    const user = await usersService.getOne(req.params.userId);
    try {
        await authService.changePassword( user, passwordData);
        res.redirect(`/users/${req.params.userId}/edit`);
    }catch(error){
        res.status(400).render('users/pwchange', {user, error })
    }
});

router.get('/:userId/delete', isAuth, async (req, res) => {
    const currentUserType = req.user?.type;
    const user = await usersService.getOne(req.params.userId);
    if (currentUserType === "admin") {
        if (user.type === "admin") {
            const users = await usersService.getAllUsers();
            return res.status(400).render('users/allusers', { error: "Admin details cannot be changed from the UI", users })
        }

        res.render('users/delete', { user });
    }
    else { res.render('home/unauthorized'); }
});



module.exports = router; 