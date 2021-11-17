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
            attributes: ["name"],
          },
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
  static async createPartiesUser(req, res, next) {
    try {
      const PartyId = +req.params.id;
      const UserId = req.currentUser.id;
      const oldRequest = await PartiesUser.findOne({
        where: {
          PartyId,
          UserId,
        },
      });
      if (oldRequest) {
        if (oldRequest.status === "approved") {
          throw {
            name: "duplicate",
            message: "You are already a member of this party!",
          };
        }
        if (oldRequest.status === "pending") {
          throw {
            name: "duplicate",
            message:
              "You already requested to join this party! Please wait for the Party Leader to proccess your request",
          };
        }
      }
      const newPartyMember = await PartiesUser.create({
        PartyId,
        UserId,
      });
      res.status(201).json(newPartyMember);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = PartyController;
