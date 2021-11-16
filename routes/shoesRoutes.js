const express = require('express');
const router = express.Router();
const ShoesController = require('../controllers/shoesController');
const { authorization } = require('../middelwares/authorization');
const { imageKitApi } = require('../middelwares/imgKit');
const { multerImg } = require('../middelwares/multer');

router.get('/', ShoesController.getShoes);
router.post(
  '/',
  multerImg,
  imageKitApi,
  authorization,
  ShoesController.postShoes
);
router.get('/:id', ShoesController.getShoeById);
router.delete('/:id', authorization, ShoesController.deleteShoeById);

module.exports = router;
