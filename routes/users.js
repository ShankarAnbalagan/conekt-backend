var express = require('express');
var {registerUser,
    accountVerification,
    loginUser,
    forgotPassword,
    resetPassword,
    logoutUser}=require('./../controllers/index');
var {validateRequest,validation_rules}=require('./../utils/index');
var router = express.Router();

/* POST Add new user */
router.post('/register',validateRequest(validation_rules.register),registerUser);

router.get('/verify',accountVerification);

router.post('/login',validateRequest(validation_rules.login),loginUser);
router.post('/forgot-password',validateRequest(validation_rules.forgotPassword),forgotPassword);

router.get('/reset-password/:code',resetPassword);

router.get('/logout',logoutUser);

module.exports = router;
