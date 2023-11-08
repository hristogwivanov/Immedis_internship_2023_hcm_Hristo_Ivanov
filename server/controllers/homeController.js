const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');

router.get('/', (req, res) => {
    loggeduser=req.user;
    if(isAuth) res.render('home/home', {loggeduser});
    else res.render('auth/login');
});

module.exports = router;