const {Order} = require("../models/index")

let orderHandler = async (req, res, next) => {
    try {
        const response = await Order.findOne({
            where: {UserId: req.user.id}
        })
        if(response.UserId !== req.user.id){
            throw ('forbidden')
        }
        next()
    } 
    catch (err) {
        next(err)
    }
}

module.exports = orderHandler