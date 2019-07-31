let validator=require('validatorjs');

module.exports=function(rules){
    return function(req,res,next){
        let validation = new Validator(re.body, rules);

        if(validation.fails()){
                var errors=validation.errors.all();
                return res.status(422).json({
                    message:error[Object.keys(error)[0]][0],
                    data={}
                })
        }
    }

    
}

