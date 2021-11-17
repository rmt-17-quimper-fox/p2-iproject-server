const express = require('express');
const RetweetController = require('../controllers/retweet');
const router = express.Router()

router.post('/', RetweetController.postRetweet)
router.get('/', RetweetController.getRetweet)

module.exports = router