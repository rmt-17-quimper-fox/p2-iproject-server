const { verify } = require('../helpers/jwtToken.js');
const { User } = require('../models');

async function Authenticate(req, res, next) {
    try {
        let { access_token } = req.headers;

        if (!access_token) {
            
            throw { name: `Invalid Token`}
        }
        const payload = verify(access_token)
        const response = await User.findOne ({ where: {email: payload.email}})
        console.log(payload );
        if (!response) {
            throw { name: "unauthorized"}
        } 
        req.user = {
            id: response.id,
            email: response.email
        }
        next();
        
    } catch (error) {
        next(error)
    }
}

module.exports = Authenticate