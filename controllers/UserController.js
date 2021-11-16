const { User } = require('../models')

class UserController{
    static async register(req, res, next) {
        try {
            const { name, email, password, rank } = req.body
            console.log(req.body);
        } catch (error) {
            next(error)
        }
    }
}