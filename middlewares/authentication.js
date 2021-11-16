const { verifyToken } = require("../helpers/jwt")
const { User } = require('../models')

async function authentication(req, res, next) {
  try {
    const { access_token } = req.headers
    if (!access_token) {
      throw { name: "unauthorized", message: "Please login first" }
    }
    const user = verifyToken(access_token)
    const foundUser = await User.findByPk(user.id)
    if (!foundUser) {
      throw { name: "JsonWebTokenError" }
    }
    req.currentUser = {
      id: foundUser.id,
      name: foundUser.name,
      email: foundUser.email,
      rank: foundUser.rank
    } 
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = {
  authentication
}
