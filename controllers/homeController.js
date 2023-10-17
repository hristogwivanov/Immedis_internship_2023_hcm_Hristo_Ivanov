const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');

router.get('/', (req, res) => {
    // if(isAuth) res.render('home');
    // else res.render('auth/login');
    res.render('auth/login')
});

module.exports = router;