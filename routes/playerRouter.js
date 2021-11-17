const express = require('express')
const playerRouter = express()
const PlayerController = require("../controllers/PlayerController")

playerRouter.post("/", PlayerController.addRole)
playerRouter.put("/rank", PlayerController.updateRank)

module.exports = playerRouter