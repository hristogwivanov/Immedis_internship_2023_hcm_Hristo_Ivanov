const router = require('express').Router();

const { isAuth } = require('../middlewares/authMiddleware');
const hcmService = require('../services/hcmService');
const { getErrorMessage } = require('../utils/errorUtils');


module.exports = router; 