const express = require('express')
const PartyController = require('../controllers/PartyController')
const partyRouter = express()

partyRouter.get('/', PartyController.fetchParties)
partyRouter.post('/', PartyController.createParty)

module.exports = partyRouter