const router = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware');
const hcmService = require('../services/hcmService');
const { getErrorMessage } = require('../utils/errorUtils');

router.get('/allusers', async (req, res) => {
    const users = await hcmService.getAllUsers();
    res.render('HCM/allusers', { users })
})

module.exports = router; 