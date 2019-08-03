var userData=require('./../models/UserData');

module.exports=function(req,res,next){
    jwt.verify(req.headers.usertoken,process.env.JWT__SECRET),
    function(err,data){
        if(err) console.log(err);

        
    }
}