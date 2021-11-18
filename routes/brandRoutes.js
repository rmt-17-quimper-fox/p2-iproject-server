const express = require('express');
const router = express.Router();
const BrandController = require('../controllers/brandController');

router.get('/', BrandController.getBrands);

module.exports = router;
