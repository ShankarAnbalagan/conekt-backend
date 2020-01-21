var Posts=require('./../models/Posts');
var UserData=require('./../models/UserData');
module.exports=function(req,res,next){

    var validCategories=['notes','sports','accomodation','transport'];
    if(!(validCategories.includes(req.body.category))){
        return res.status(200).json({"message":"Invalid category","data":{}});
    }


    Posts.find({postCategory:req.body.category, parentPost:"root"}).sort('-timeCreated').exec(function(err,results){
        if(err)console.log(err);
        else{
            if(results.length===0)
                return res.status(200).json({"message":"No posts in this category","data":{}});
            res.status(200).json({"message":"Posts retreived successfully","data":results});
        }
    });
}