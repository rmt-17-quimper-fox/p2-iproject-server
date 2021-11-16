const express = require('express');
const router = express.Router();
const authRoutes = require;

router.use('/', authRoutes);
router.use('/shoes', shoesRoutes);
router.use('/cart', cartRoutes);
router.use('/brand', brandRoutes);

module.exports = router;
