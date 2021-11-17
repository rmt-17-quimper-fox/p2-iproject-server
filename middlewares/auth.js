const { User, News } = require('../models');
const { getPayload } = require('../helpers/auth');
const authentication = async (req, res, next) => {
    try {
        const { baseUrl } = req;
        const { access_token } = req.headers;
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
const authorization = async (req, res, next) => {
    const requestMethod = Object.keys(req.route.methods)[0];
    try {
        const { id } = req.params;
        const newsFound = await News.findByPk(id);
        if(!newsFound) {
            throw { name: 'Data not found' };
        }
        const userId = newsFound.authorId;
        if(req.user.role === 'Administrator') {
            next();
        } else {
            if(requestMethod !== 'patch') {
                if(req.user.id !== userId) {
                    throw { name: 'Forbidden' };
                }
                next();
            } else {
                throw { name: 'Forbidden' };
            }
        }
    } catch (error) {
        next(error); 
    }
}

module.exports = {
    authentication, authorization
}