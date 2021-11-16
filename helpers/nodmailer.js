const nodemailer = require("nodemailer");

function nodmailerHelper(email, name, token) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ayam78349@gmail.com',
            pass: 'midasg-2'
        }
    });
    const mailOptions = {
        from: 'ayam78349@gmail.com',
        to: email,
        subject: `Kepada bpk/ibu ${name}`,
        text: 'Saat ini email anda telah terdaftar di #TamanBermain. Platform kami dibuat sebagai sarana edukasi untuk anak. Untuk mendapat hasil terbaik, selalu berikan perhatian pada kegiatan belajar anak anda.'
    };
    transporter.sendMail(mailOptions, function(err) {
        if (err) {
            console.log(err);
        } else {
            res.status(200).json({ access_token: token });
        }
    });
}

module.exports = { nodmailerHelper }