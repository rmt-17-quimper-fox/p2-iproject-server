const express = require("express")
const router = express()
const partyRouter = require("./partyRouter")
const { errorHandler } = require("../middlewares/errorHandler")
const UserController = require("../controllers/UserController")
const { authentication } = require("../middlewares/authentication")

router.post("/register", UserController.register)
router.post("/login", UserController.login)

router.use("/party", authentication, partyRouter)

router.use(errorHandler)

module.exports = router
