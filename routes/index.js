const express = require('express')
const { errorHandler } = require('../middlewares/errorHandler')
const router = express()
const UserController = require('../controllers/UserController')

router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.use(errorHandler)

module.exports = router