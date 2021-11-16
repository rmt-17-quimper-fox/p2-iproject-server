const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');
const shoesRoutes = require('./shoesRoutes');
const cartRoutes = require('./cartRoutes');
const brandRoutes = require('./brandRoutes');
const errorHandler = require('../middelwares/errorHandler');

router.use('/', authRoutes);
router.use('/shoes', shoesRoutes);
router.use('/cart', cartRoutes);
router.use('/brand', brandRoutes);

router.use(errorHandler);

module.exports = router;
