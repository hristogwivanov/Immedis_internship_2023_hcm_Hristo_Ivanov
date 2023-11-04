const router = require('express').Router();

const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const hcmController = require('./controllers/hcmController');

router.use(homeController);
router.use(authController);
router.use('/HCM', hcmController);

router.all('*', (req, res) => {
    res.render('home/404')
});

module.exports = router; 