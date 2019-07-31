var mongoose = require('mongoose');

const UserDataSchema=mongoose.Schema({
    userName: String,
    email: String,
    password: String,
    isVerified: {type: Boolean, default: false},
    verificationToken: String
});

module.exports=mongoose.model('UserData',UserDataSchema);