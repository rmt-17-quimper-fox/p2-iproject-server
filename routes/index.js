const router = require("express").Router();
const errorHandler = require('../middlewares/errorHandler')
const userController = require('../controllers/userController')

router.get("/", (req, res) => {
  res.send("home");
});


router.post('/register', userController.register);
router.post('/login', userController.login);

router.post('/bookmarks/:id')

router.use(errorHandler)

module.exports = router;   