module.exports={
    register:{
        'userName':'required|alpha_num',
        'email':'required|email',
        'password':'required|min:8'

    },
    forgotPassword:{
        "email":"required|email"
    }
};