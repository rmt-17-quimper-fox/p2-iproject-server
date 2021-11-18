const express = require('express');
const router = express.Router();
const { getAllUsers, giveUserStar } = require('../controllers/UserControllers');

router.get('/users', getAllUsers);
router.patch('/users/:id', giveUserStar);

module.exports = router;