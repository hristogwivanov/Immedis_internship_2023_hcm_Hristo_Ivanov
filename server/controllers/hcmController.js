const router = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware');
const hcmService = require('../services/hcmService');
const { getErrorMessage } = require('../utils/errorUtils');

router.get('/allusers', async (req, res) => {


    res.render('HCM/allusers', {})
})

module.exports = router; 