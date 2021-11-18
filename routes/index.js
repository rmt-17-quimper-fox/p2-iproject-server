const router = require('express').Router();
const Controller = require('../controllers/fruitsController')
const UserController = require('../controllers/userController')
const ControllerCats = require('../controllers/catsCotroller')
const ControllerMath = require('../controllers/mathController')
const errorHandler = require('../middlewares/errHandler')
const authentication = require('../middlewares/authentication')

router.post('/login', UserController.postLogin)
router.post('/register', UserController.postRegister)
router.post('/googleLogin', UserController.googleLogin)
router.use(authentication)
// router.get('/fruits', Controller.getAllFruits)
router.get('/fruits/:id', Controller.getAllFruitsId)
router.get('/fruits/quiz/:id', Controller.getFruitQuiz)
router.get('/mathematics', ControllerMath.getRandom)
router.get('/cats', ControllerCats.getRandom)
// router.get('/rankings', UserController.getRanking)
// router.post('/rankings', UserController.postRanking)
router.use(errorHandler)

module.exports = router