const express = require('express');
const RetweetController = require('../controllers/retweet');
const router = express.Router()

router.get('/', RetweetController.getRetweet)
router.post('/:tweetId', RetweetController.postRetweet)

module.exports = router