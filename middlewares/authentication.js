const {User} = require('../models/index')
const {verifyData} = require('../helpers/helper')

let authentication = async (req, res, next) => {
    try {
        const { access_token } = req.headers
        
        if(!req.headers.access_token){
            throw('invalidtoken')
        }

        const payload = verifyData(access_token)
        let response = await User.findOne({
            where: {email: payload.email}
        })

        req.user = {
            id: response.id,
            email: response.email
        }
        next()
    } 
    catch (err) {
        next(err)
    }
}

module.exports = authentication