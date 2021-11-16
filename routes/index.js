const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');
const shoesRoutes = require('./shoesRoutes');
const cartRoutes = require('./cartRoutes');
const brandRoutes = require('./brandRoutes');
const errorHandler = require('../middelwares/errorHandler');
const authentication = require('../middelwares/authentication');

router.use('/', authRoutes);

router.use(authentication);

router.use('/shoes', shoesRoutes);
router.use('/carts', cartRoutes);
router.use('/brands', brandRoutes);

router.use(errorHandler);

module.exports = router;
