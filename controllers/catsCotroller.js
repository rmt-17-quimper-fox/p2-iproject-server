const axios = require('axios');

class ControllerCats {
    static async getRandom(req, res, next) {
        try {
            const response = await axios({
                url: `https://api.thecatapi.com/v1/images/search?mime_types=gif`,
                method: "GET",
            })
            res.status(200).json({ url: response.data[0].url })
        } catch (err) {
            next(err)
        }
    }
}

module.exports = ControllerCats