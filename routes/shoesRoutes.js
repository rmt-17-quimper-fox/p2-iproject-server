const express = require('express');
const router = express.Router();
const ShoesController = require('../controllers/shoesController');

router.get('/', ShoesController.getShoes);

module.exports = router;
