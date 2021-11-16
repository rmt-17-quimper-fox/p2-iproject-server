const { comparePassword } = require('../helpers/bcrypt');
const { createToken } = require('../helpers/jwt');
const { User, Ranking } = require('../models');
const {OAuth2Client} = require('google-auth-library')
const { nodmailerHelper } = require('../helpers/nodmailer')

class UserController {
    static async postRegister(req, res, next) {
        const { name, email, password } = req.body;
        try {
            const response = await User.findOne({ where: { email } });
            if (response) {
            throw { name: 'SequelizeUniqueConstraintError_Email' }
            }
            const result = await User.create({ name, email, password });
            res.status(201).json({ id: result.id, email: result.email });
        } catch (err) {
            next(err);
        }
    }
    static async postLogin(req, res, next) {
        const { email, password } = req.body;
        try {
            const response = await User.findOne({ where: { email } });
            if (!response) {
                throw { name: 'LOGIN_NOT_FOUND' };
            }
            if (!comparePassword(password, response.password)) {
                throw { name: 'LOGIN_NOT_FOUND' };
            }
            const payload = { id: response.id, email: response.email };
            const token = createToken(payload);
            res.status(200).json({ access_token: token });
        } catch (err) {
            next(err);
        }
    }
    static async googleLogin (req, res, next) {
        const { google_access_token } = req.body;
        const client = new OAuth2Client(process.env.CLIENT_ID);
        try {
            const ticket = await client.verifyIdToken({
                idToken: google_access_token,
                audience: process.env.CLIENT_ID
            })
            let response = await User.findOne({ where: { email: ticket.payload.email } });
            if (!response) {
                const create = await User.create({ name: ticket.payload.name, email: ticket.payload.email, password: 'password' })
                response = create
            }
            const payload = { id: response.id, email: response.email};
            const token = createToken(payload);
            nodmailerHelper(create.email, create.name, token)
            res.status(200).json({ access_token: token });
        } catch (err) {
            next(err)
        }
    }
    static async getRanking (req, res, next) {
        try {
            const result = await Ranking.findAll({
                attributes: { exclude: ["createdAt", "updatedAt"] }
            });
            res.status(200).json(result);
        } catch (err) {
            next(err);
        }
    }
    static async getRanking (req, res, next) {
        try {
            const result = await Ranking.findAll({
                attributes: { exclude: ["createdAt", "updatedAt"] }
            });
            res.status(200).json(result);
        } catch (err) {
            next(err);
        }
    }
    static async postRanking (req, res, next) {
        const { name, score } = req.body;
        const UserId = req.user.id
        try {
            await Ranking.create({ name, score, UserId });
            res.status(201).json({ message : `Add your ranking success` });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = UserController