module.exports={
    register:{
        'userName':'required|alpha_num',
        'email':'required|email',
        'password':'required|min:8'
    },
    login:{
        'userName':'required_without:email|alpha_num',
        'email':'required_without:userName|email',
        'password':'required'

    },
    forgotPassword:{
        "email":"required|email"
    }
};