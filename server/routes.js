const router = require('express').Router();

const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const usersController = require('./controllers/usersController');

router.use(homeController);
router.use(authController);
router.use('/users', usersController);

router.all('*', (req, res) => {
    res.render('home/404')
});

module.exports = router; 