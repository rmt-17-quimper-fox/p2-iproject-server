
const { hash, compare} = require('../helpers/bcrypt.js');
const { sign } = require('../helpers/jwtToken.js');
const { User } = require('../models');

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
                    let tokenPayload = { id: userLogin.id, email: userLogin.email, role: userLogin.role}
                    let accessToken = sign(tokenPayload)
                    res.status(200).json({ message: `Login Successful`, userId: userLogin.id, accessToken})
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