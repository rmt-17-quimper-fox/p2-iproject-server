const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.post('/register', UserController.postRegister);
router.post('/login', UserController.postLogin);

module.exports = router;
