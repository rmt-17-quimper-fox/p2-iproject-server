const express = require('express');
const ReplyTweetController = require('../controllers/replyTweet');
const router = express.Router()

router.post('/', ReplyTweetController.postReplyTweet)
router.get('/', ReplyTweetController.getReplyTweet)

module.exports = router