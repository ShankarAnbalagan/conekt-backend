var nodemailer = require('nodemailer');

module.exports=function(verificationToken,email){
    var transporter=nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: process.env.SMTP_USER,
               pass: process.env.SMTP_PASS
           }
       });

    transporter.sendMail({
            from: '"Admin Panda 🐼" <verify-bot@conekt-admin.com>',
            to: email,
            subject: "Verify your e-mail address",
            html: `<h2>Welcome to Conekt</h2><h2>Click the link below to verify your e-mail</h2>
            <a href='http://localhost:3000/users/verify?code=${verificationToken}'>Verify e-mail</p>`
        },
        function(err,data){
            if(err) console.log("Error while sending verification email------>", err);
            else console.log("Verification email sent----->",data);
        }
    );
}