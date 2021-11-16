const express = require('express');
const router = express.Router();
const CartController = require('../controllers/cartController');

router.post('/:shoeId', CartController.postCart);

module.exports = router;
