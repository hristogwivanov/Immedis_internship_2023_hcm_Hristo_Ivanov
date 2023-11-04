const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');

router.get('/', (req, res) => {
    if(isAuth) res.render('home/home');
    else res.render('auth/login');
    console.log('isAuth');
});

module.exports = router;