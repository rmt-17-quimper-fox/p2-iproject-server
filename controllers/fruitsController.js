const { getFruits, fruitQuiz } = require('../helpers/fruityviceApi.js')

class Controller {
    static async getAllFruits(req, res,) {
        try {
            const result = await getFruits()
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }
    static async getAllFruitsId(req, res,) {
        const id = +req.params.id
        let result = {}
        try {
            const fruits = await getFruits()
            for (const iterator of fruits) {
                if(iterator.id === id) {
                    result = iterator
                }
            }
            if (result.id === undefined) {
                throw { name: "DATA_NOT_FOUND" }
            }
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }
    static async getFruitQuiz(req, res,) {
        const id = +req.params.id
        let result = {}
        try {
            const fruits = await fruitQuiz()
            for (const iterator of fruits) {
                if(iterator.id === id) {
                    result = iterator
                }
            }
            if (result.id === undefined) {
                throw { name: "DATA_NOT_FOUND" }
            }
            res.status(200).json(result)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = Controller