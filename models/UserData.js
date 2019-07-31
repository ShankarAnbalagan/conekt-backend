var mongoose = require('mongoose');
var bcrypt=require('bcrypt');

const UserDataSchema=mongoose.Schema({
    userName: String,
    email: String,
    password: String,
    isVerified: {type: Boolean, default: false},
    verificationToken: String,
    passwordResetToken: String
});


UserDataSchema.pre('save', function(next){
    var user = this;
    
    // only hash password if it is new
    if(!user.isNew) return next();
    
    if(!user.password) return next();

    // hashing the password with 10 rounds of salt generation
    bcrypt.hash(
        user.password, 
        10, 
        function(err, hash){
            if(err) return next(err);

            user.password = hash;
            next();
    });
});

module.exports=mongoose.model('UserData',UserDataSchema);