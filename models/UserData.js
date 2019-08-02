var mongoose = require('mongoose');
var bcrypt=require('bcrypt');

const UserDataSchema=mongoose.Schema({
    userName: String,
    email: String,
    password: String,
    isVerified: {type: Boolean, default: false},
    verificationToken: String,
    passwordResetToken: String,
    isLoggedIn:{type: Boolean, default:false},
    profile:{profilePic:{type:String, default:"http://minecraftfaces.com/wp-content/bigfaces/big-sheep-face.png"},
            bio:{type:String, default:"Hey there! I'm using Conekt"},
            branch:String}
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

UserDataSchema.methods.comparePassword=function(userPassword,cb){
    bcrypt.compare(userPassword,this.password,function(err,isMatch){
        return cb(err,isMatch);
    });
}

module.exports=mongoose.model('UserData',UserDataSchema);