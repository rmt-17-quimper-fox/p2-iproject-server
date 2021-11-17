const express = require('express');
const ReplayTweetController = require('../controllers/replayTweet');
const router = express.Router()

router.post('/', ReplayTweetController.postReplayTweet)
router.get('/', ReplayTweetController.getReplayTweet)

module.exports = router