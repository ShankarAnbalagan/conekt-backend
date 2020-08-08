var nodemailer = require('nodemailer');

module.exports={verification: 
        function(verificationToken,email){
            var transporter=nodemailer.createTransport({
                pool: true,
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: 'conekt.bot@gmail.com',
                    pass: 'conektbot123'
                }
            });

            transporter.sendMail({
                    from: '"Admin Panda 🐼" <verfiy@conekt.com>',
                    to: email,
                    subject: "Verify your e-mail address",
                    html: `<h2>Welcome to Conekt</h2><h2>Click the link below to verify your e-mail</h2>
                    <a href='https://conektapi.herokuapp.com/users/verify?code=${verificationToken}'>Verify e-mail</p>`
                },
                function(err,data){
                    if(err) console.log("Error while sending verification email------>", err);
                    else console.log("Verification email sent----->",data);
                }
            );
        },

        passwordReset:
        function(passwordResetToken,email){
            var transporter=nodemailer.createTransport({
                pool: true,
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: 'conekt.bot@gmail.com',
                    pass: 'conektbot123'
                }
            });

            transporter.sendMail({
                    from: '"Admin Panda 🐼" <password-reset-bot@conekt-admin.com>',
                    to: email,
                    subject: "Reset Password",
                    html: `<h2>Hey, it's alright. People forget a lot of stuff.</h2><h2>Click the link below to reset your password</h2>
                    <a href='https://conektapi.herokuapp.com/users/reset-password?code=${passwordResetToken}'>Reset Password</a><br>
                    <p>This link is valid for one hour only</p>`
                },
                function(err,data){
                    if(err) console.log("Error while sending password reset link email------>", err);
                    else console.log("Password reset link sent----->",data);
                }
            );
        }
}