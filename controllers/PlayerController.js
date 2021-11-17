const { User, Role, UsersRole } = require('../models')

class PlayerController{
  static async addRole(req, res, next) {
    try {
      const { RoleId } = req.body
      const foundRole = await UsersRole.findOne({
        where: {
          UserId: req.currentUser.id,
          RoleId
        }
      }) 
      if (foundRole) {
        throw { name: "duplicate", message: "you already added this role!" }
      }
      const newUserRole = await UsersRole.create({
        RoleId,
        UserId: req.currentUser.id
      })
      res.status(201).json(newUserRole)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = PlayerController