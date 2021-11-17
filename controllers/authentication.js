
const { hash, compare} = require('../helpers/bcrypt.js');
const { sign } = require('../helpers/jwtToken.js');
const { User } = require('../models');

const nodemailer = require('nodemailer');

class Authentication  {

    static async register (req, res, next) {
        try {
            const { firstName, lastName, username, email, password, profilePic} = req.body
            let profilePicture;
            if (profilePic == undefined) profilePicture = "https://e7.pngegg.com/pngimages/442/477/png-clipart-computer-icons-user-profile-avatar-profile-heroes-profile.png"; 
            else profilePicture = profilePic;

            console.log("ini pic", profilePicture);
            let newUser = await User.create({
                firstName,
                lastName,
                username,
                password,
                email, 
                following: 0,
                followers: 0,
            })
            console.log(newUser);
            res.status(201).json({ 
                name: `${newUser.firstName} ${newUser.lastName}`,
                username: newUser.username,
                email: newUser.email,
                message: `register successfully`})
        } catch (error) {
            next(error)
        }
    }

    static async login (req, res, next) {
        try {
            if (!req.body.email) {
                throw ({ name: `Error Login`})
            }
            console.log(req.body, "<<<<<<<<<<1111");
            let email = req.body.email
            let password = req.body.password
            let userLogin = await User.findOne({
                where: {
                    email
                }
            })
            if (userLogin) {
                let isValidPassword = compare(password, userLogin.password)
                if (isValidPassword) {
                    let tokenPayload = { id: userLogin.id, email: userLogin.email}
                    let access_token = sign(tokenPayload)
                    // Nodemailer
                    let mailTransporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: "lyusmurf13@gmail.com",
                            pass: "ngawicity"
                        }
                    });
                    console.log(mailTransporter);
                    let mailDetails = {
                        from: 'Tweettweet',
                        to: userLogin.email,
                        subject: 'Login Tweettweet',
                        text: 'Login Successfully on Tweettweet'
                    };

                    mailTransporter.sendMail(mailDetails, function(err, data) {
                        if(err) {
                            console.log('Error Occurs');
                        } else {
                            console.log('Email sent successfully');
                        }
                    });
                    res.status(200).json({ message: `Login Successful`, userId: userLogin.id, access_token})
                
                } else {
                    throw { name: "Error Login"}
                }
            }
        } catch (error) {
            next(error)
        }
    }

    static async checkToken (req, res, next) {
        console.log(`asdsa`);
        try {
            console.log(`asda`) 
            let { access_token } = req.headers;
            if (!access_token) {
    
                throw { name: `Invalid  Token`}
            }
            const payload = TokenLogin.tokenPayload(access_token)
            const response = await User.findOne ({ where: {email: payload.email}})
            if (!response) {
                throw { name: `Invalid Token`}
            } 
            res.status(200).json({ message: `Token is Valid`})
            
        } catch (error) {
            console.log(error);
            next(error)
        }
    }

}

module.exports = Authentication 