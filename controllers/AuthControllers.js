const { User } = require('../models');
const { getJwtToken } = require('../helpers/auth');
const { hashPassword, comparePassword } = require('../helpers/bcrypt');
const sendEmail = require('../helpers/nodemailer');

const register = async (req, res, next) => {
    try {
        let latestId;
        const latestUser = await User.findOne({ order: [ [ 'createdAt', 'DESC' ] ] });
        if(!latestUser) {
            latestId = 1;
        } else {
            latestId = latestUser.id;
        }
        const { username, email, password } = req.body;
        const payload = {
            id: latestId+1,
            email
        };
        const token = getJwtToken(payload);
        let resp = await User.create({ username, email, password, token});
        resp = {
            id: resp.id,
            email: resp.email,
        };
        res.status(201).json(resp);
    } catch (error) {
        next(error);
    }
};
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if(!email) {
            throw { name: 'Email is empty' }
        }
        if(!password) {
            throw { name: 'Password is empty' }
        }
        const resp = await User.findOne({
            where: { email }
        });
        if(!resp) {
            throw { name: 'Invalid email/password' };
        };
        const hashedPassword = resp.password;
        const isPasswordCorrect = comparePassword(password, hashedPassword);
        if(!isPasswordCorrect) {
            throw { name: 'Invalid email/password' };
        }
        const payload = {
            id: resp.id,
            email: resp.email
        };
        const token = getJwtToken(payload);
        res.status(200).json({ access_token: token });
    } catch (error) {
        next(error); 
    }
};
const forgotPassword = async (req, res, next) => {
    try {
        const { email } = req.body;
        const userFound = await User.findOne({ where: { email } });
        if(!email) {
            throw { name: 'Email not exist' }
        }
        const payload = {
            id: userFound.id,
            email: userFound.email
        };
        const token = getJwtToken(payload);
        userFound.token = token;
        userFound.save();
        const subject = 'Reset Password';
        const text = `This is your reset token ${token}`;
        sendEmail(email, subject, text);
        res.status(200).json({ message: 'Please check your email to get reset token' });
    } catch (error) {
        next(error)
    }
};
const resetPassword = async (req, res, next) => {
    try {
        const { token, password } = req.body;
        const userFound = await User.findOne({ where: { token } });
        if(!userFound) {
            throw { name: 'Invalid Token' };
        }
        userFound.password = hashPassword(password);
        userFound.save();
        res.status(200).json({ message: 'Password is already been updated' });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    register, login, forgotPassword, resetPassword
}