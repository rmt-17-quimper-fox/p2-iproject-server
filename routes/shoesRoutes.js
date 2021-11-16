const express = require('express');
const router = express.Router();
const ShoesController = require('../controllers/shoesController');

router.get('/', ShoesController.getShoes);
router.post('/', ShoesController.postShoes);

module.exports = router;
