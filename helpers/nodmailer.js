const nodemailer = require("nodemailer");

function nodmailerUserLogin(email, name) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sddadasdsdasda5@gmail.com',
            pass: process.env.EMAIL_PASSWORD
        }
    });
    const mailOptions = {
        from: 'sddadasdsdasda5@gmail.com',
        to: email,
        subject: `Kepada bpk/ibu ${name}`,
        text: 'Kami mendeteksi adanya aktivitas login mengguakan akun anda. Bila aktivitas tersebut atas persetujuan anda, abaikan pesan ini.'
    };
    transporter.sendMail(mailOptions, function(err) {
        if (err) {
            console.log(err);
        } else {
            res.status(200).json({ message: 'Terima kasih' });
        }
    });
}

function nodmailerNewUser(email, name) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sddadasdsdasda5@gmail.com',
            pass: process.env.EMAIL_PASSWORD
        }
    });
    const mailOptions = {
        from: 'sddadasdsdasda5@gmail.com',
        to: email,
        subject: `Kepada bpk/ibu ${name}`,
        text: 'Saat ini email anda telah terdaftar di #TempatBermain. Platform kami dibuat sebagai sarana edukasi untuk anak. Untuk mendapat hasil terbaik, selalu berikan perhatian pada kegiatan belajar anak anda.'
    };
    transporter.sendMail(mailOptions, function(err) {
        if (err) {
            console.log(err);
        } else {
            res.status(200).json({ message: 'Terima kasih' });
        }
    });
}


module.exports = {
    nodmailerNewUser,
    nodmailerUserLogin
}