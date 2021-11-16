const { comparePassword } = require('../helpers/bcrypt')
const { createToken } = require('../helpers/jwt')
const { User } = require('../models/index')


class userController {
    static async register (req, res, next){
        try {
            const {email, password} = req.body
            const user = await User.create({
                email,
                password
            })
            res.status(201).json({
                id: user.id,
                email: user.email
            })
        } catch (err) {
            console.log(err)
            next(err)
        }
    }

    static async login(req, res, next){
        try {
           const {email, password} = req.body
           const user = await User.findOne({
               where:{email}
           }) 
           if(!user){
               throw {name: 'UserNotFound'}
           }
           const passwordCheck = comparePassword(password, user.password)
           if(!passwordCheck){
               throw {name: 'UserNotFound'}
           }
           const payload = {
               id: user.id,
               email: user.email
           }

           const token = createToken(payload)
           res.status(200).json({
               access_token: token
           })
        } catch (err) {
            next(err)
        }
    }
}

module.exports= userController