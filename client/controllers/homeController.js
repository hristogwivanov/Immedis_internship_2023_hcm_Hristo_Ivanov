const router = require('express').Router();

router.get('/', (req, res) => {
    console.log('opa');
    res.redirect('login');
})

module.exports = router;