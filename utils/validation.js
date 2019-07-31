let validator=require('validatorjs');

module.exports=function(rules){
    return function(req,res,next){
        let validation = new validator(req.body, rules);

        if(validation.fails()){
                var errors=validation.errors.all();

                var errorList=[];
                Object.values(errors).forEach(function(error){
                    errorList.push(error[0])
                });

                return res.status(422).json({
                    message:errorList,
                    data:{}
                })
            
        }else
            next();
    }

    
}

