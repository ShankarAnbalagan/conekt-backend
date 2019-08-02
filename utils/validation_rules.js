module.exports={
    register:{
        'userName':'required|alpha_num',
        'email':'required|email',
        'password':'required|min:8'
    },
    login:{
        'userId':'required',
        'password':'required'

    },
    forgotPassword:{
        "email":"required|email"
    }
};