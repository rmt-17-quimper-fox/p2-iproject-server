const { User } = require('../models')
const { VerifyToken } = require('../helpers/generateToken')

const authentication = async (req, res, next) => {
    try {
        const { access_token } = req.headers;
        if (!access_token) {
            res.status(400).json({ message: "Please Login first"})
        }
        const payload = VerifyToken(access_token)
        const user = await User.findOne({ where: { email: payload.email } })
        if (!user) {
            res.status(400).json({ message: "Email/password not valid"})
        } else {
            req.user = {
                id: user.id,
                email: user.email,
                role: user.role
            }
            next()
        }
    } catch (err) {
        res.status(500).json({ message: "Invalid server error"})
    }
}

module.exports = authentication