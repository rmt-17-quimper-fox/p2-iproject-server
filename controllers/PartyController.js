const { Party, User, PartiesUser, UsersHero } = require("../models");

class PartyController {
  static async fetchParties(req, res, next) {
    try {
      const foundParties = await Party.findAll({
        include: {
          model: User,
          as: "members",
          attributes: ["id", "name", "rank"],
          include: {
            model: UsersHero,
            as: "heroes",
            attributes: ['name']
          }
        },
      });
      res.status(200).json(foundParties);
    } catch (error) {
      next(error);
    }
  }
  static async createParty(req, res, next) {
    try {
      const { name, mode, schedule } = req.body;
      const newParty = await Party.create({
        name,
        mode,
        partyLeaderId: req.currentUser.id,
        schedule,
      });
      await PartiesUser.create({
        UserId: req.currentUser.id,
        PartyId: newParty.id,
        status: "approved",
      });
      res.status(201).json(newParty);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PartyController;
