const express = require('express');
const router = express.Router();
const RajaOngkirController = require('../controllers/rajaOngkirController');

router.get('/', RajaOngkirController.getCity);

module.exports = router;
