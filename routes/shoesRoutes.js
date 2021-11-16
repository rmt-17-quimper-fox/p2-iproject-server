const express = require('express');
const router = express.Router();
const ShoesController = require('../controllers/shoesController');
const { imageKitApi } = require('../middelwares/imgKit');
const { multerImg } = require('../middelwares/multer');

router.get('/', ShoesController.getShoes);
router.post('/', multerImg, imageKitApi, ShoesController.postShoes);
router.get('/:id', ShoesController.getShoeById);

module.exports = router;
