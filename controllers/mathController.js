const axios = require('axios');

class ControllerMath {
    static async getRandom(req, res, next) {
        try {
            const response = await axios({
                url: `https://matematika-dasar.herokuapp.com/`,
                method: "GET",
                headers: {
                    key: process.env.MATH_KEY
                }
            })
            res.status(200).json(response.data)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = ControllerMath