const nodemailer = require('nodemailer');

const sendEmail = (email, subject, text) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_ADMIN,
            pass: process.env.PASSWORD_ADMIN,
        },
    });
    
    const option = {
        from: process.env.EMAIL_ADMIN,
        to: email,
        subject,
        text,
    };
    
    transporter.sendMail(option, function(err, info) {
        if(err) console.log('Fail send message to email');
        console.log('Success send message to email');
    });
}

module.exports = sendEmail;
