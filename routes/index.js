const express = require('express')
const { errorHandler } = require('../middlewares/errorHandler')
const router = express()

router.post('/register')
router.post('/login')

router.use(errorHandler)

module.exports = router