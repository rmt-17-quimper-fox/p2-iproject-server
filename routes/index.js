const express = require("express");
const router = express();
const partyRouter = require("./partyRouter");
const { errorHandler } = require("../middlewares/errorHandler");
const UserController = require("../controllers/UserController");
const { authentication } = require("../middlewares/authentication");
const playerRouter = require("./playerRouter");

router.post("/register", UserController.register);
router.post("/login", UserController.login);

router.use("/party", authentication, partyRouter);
router.use("/player",authentication, playerRouter);

router.use(errorHandler);

module.exports = router;
