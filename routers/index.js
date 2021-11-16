const router = require("express").Router();
const errorHandler = require('../middlewares/errorHandler')
const userController = require('../controllers/userController')
const bookmarkController = require('../controllers/bookmarkController')
const authentication = require('../middlewares/authentication')

router.get("/", (req, res) => {
  res.send("home");
});


router.post('/register', userController.register);
router.post('/login', userController.login);

router.use(authentication)

router.post('/bookmarks', bookmarkController.postBookmark)
router.get('/bookmarks', bookmarkController.getBookmark)

router.use(errorHandler)

module.exports = router;   