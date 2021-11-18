const { User } = require('../models');

const getAllUsers = async (req, res, next) => {
    try {
        let resp = await User.findAll({ order: [['star', 'DESC']] });
        resp = resp.map(el => {
            return {
                id: el.id,
                username: el.username,
                star: el.star
            };
        })
        res.status(200).json(resp);
    } catch (error) {
        next(error);
    }
};
const giveUserStar = async (req, res, next) => {
    try {
        const { star } = req.body;
        const { id } = req.params;
        let resp = await User.update({ star }, { where: { id }, returning: true });
        resp = {
            id: resp[1][0].id,
            username: resp[1][0].username,
            star: resp[1][0].star,
        };
        res.status(200).json(resp);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllUsers, giveUserStar
}