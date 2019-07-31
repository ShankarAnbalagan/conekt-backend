var express = require('express');
var {registerUser}=require('./../controllers/index');
var {validateRequest,validation_rules}=require('./../utils/index');
var router = express.Router();

/* POST Add new user */
router.post('/register',validateRequest(validation_rules.register),registerUser);

module.exports = router;
