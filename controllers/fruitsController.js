const { getFruits } = require('../helpers/fruityviceApi.js')

class Controller {
    static async getAllFruits(req, res,) {
        try {
            const result = await getFruits()
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = Controller