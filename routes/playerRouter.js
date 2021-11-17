const express = require('express')
const playerRouter = express()

playerRouter.get("/", (req, res) => { console.log('tes'); })

module.exports = playerRouter