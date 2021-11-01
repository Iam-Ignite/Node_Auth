const { Router } = require('express');
const authConttoller = require('../controllers/authController')

const router =Router();

router.get('/signup', authConttoller.signup_get);
router.post('/signup', authConttoller.signup_post);

router.get('/login', authConttoller.login_get);
router.post('/login', authConttoller.login_post);

router.get('/logout', authConttoller.logout_get);


module.exports = router