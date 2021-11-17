const express = require('express');
const Authentication = require('../controllers/authentication.js');
const Authenticate = require('../middlewares/authenticate');
const errorHandler = require('../middlewares/errorHandler')
const router = express.Router()
const routerTweet = require('./tweet');
const routerRetweet = require('./retweets.js');
const routerReplayTweet = require('./replyTweet.js');




router.post('/register',  Authentication.register)
router.post('/login', Authentication.login)
router.get('/checkToken', Authentication.checkToken)
router.use(Authenticate)

router.use('/tweets', routerTweet)
router.use('/retweets', routerRetweet)
router.use('/replaytweets', routerReplayTweet)
router.use(errorHandler)

module.exports = router