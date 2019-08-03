var express = require('express');
var {registerUser,
    accountVerification,
    loginUser,
    forgotPassword,
    resetPassword,
    logoutUser,
    profile,
    setNewPassword}=require('./../controllers/index');
var {validateRequest,validation_rules,authenticator}=require('./../utils/index');
var router = express.Router();

/* POST Add new user */
router.post('/register',validateRequest(validation_rules.register),registerUser);

router.get('/verify',accountVerification);

router.post('/login',validateRequest(validation_rules.login),loginUser);
router.post('/forgot-password',validateRequest(validation_rules.forgotPassword),forgotPassword);

router.get('/reset-password/',resetPassword);

router.post('/set-new-password/:code',setNewPassword);

router.get('/logout',logoutUser);

router.get('/profile',authenticator,profile);

module.exports = router;
