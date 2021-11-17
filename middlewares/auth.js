const { User } = require('../models');
const { getPayload } = require('../helpers/auth');
const authentication = async (req, res, next) => {
    try {
        const { path } = req.route;
        const { access_token } = req.headers;
        if(path === '/edamame' && !access_token) {
            next();
        }
        if(!access_token) {
            throw { name: 'Unauthorized' };
        }
        const { id } = getPayload(access_token);
        const foundUser = await User.findByPk(id);
        if(!foundUser) {
            throw { name: 'Unauthorized' };
        }
        if(baseUrl === '/customers') {
            if(foundUser.role !== 'Customer') {
                throw { name: 'Forbidden' };
            }
        }
        req.user = {
            id: foundUser.id,
            email: foundUser.email,
            role: foundUser.role
        }
        next();
    } catch (error) {
        next(error);
    }
}

module.exports = authentication;