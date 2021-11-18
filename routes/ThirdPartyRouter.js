const express = require('express');
const router = express.Router();
const { getEdamameRecipes, getEdamameRecipeById, getYoutubeData } = require('../controllers/ThirdPartyControllers');

router.get('/edamame', getEdamameRecipes);
router.get('/edamame/:foodId', getEdamameRecipeById);
router.get('/youtube', getYoutubeData)

module.exports = router;