const express = require('express')
const playerRouter = express()
const PlayerController = require("../controllers/PlayerController")

playerRouter.post("/", PlayerController.addRole)

module.exports = playerRouter