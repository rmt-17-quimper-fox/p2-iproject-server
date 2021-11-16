const router = require('express').Router();
const Controller = require('../controllers/fruitsController')
const UserController = require('../controllers/userController')
const errorHandler = require('../middlewares/errHandler')
const authentication = require('../middlewares/authentication')

router.post('/login', UserController.postLogin)
router.post('/register', UserController.postRegister)
router.post('/googleLogin', UserController.googleLogin)
router.use(authentication)
router.get('/fruits', Controller.getAllFruits)
router.get('/rankings', UserController.getRanking)
router.post('/rankings', UserController.postRanking)
router.use(errorHandler)

module.exports = router