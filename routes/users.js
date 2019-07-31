var express = require('express');
var {registerUser}=require('./../controllers/index');
var router = express.Router();

/* POST Add new user */
router.post('/register',registerUser);

module.exports = router;
