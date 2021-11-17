const express = require('express');
const TweetController = require('../controllers/tweet');
const router = express.Router()

router.post('/', TweetController.postTweet)
router.get('/', TweetController.getTweet)

module.exports = router