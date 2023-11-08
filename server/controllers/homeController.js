const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');

router.get('/', (req, res) => {
    user=req.user;
    console.log(user);
    if(isAuth) res.render('home/home', {user});
    else res.render('auth/login');
});

module.exports = router;