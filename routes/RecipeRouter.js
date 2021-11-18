const express = require('express');
const router = express.Router();
const { postRecipe, getAllRecipes } = require('../controllers/RecipeControllers');

router.post('/recipes', postRecipe);
router.get('/recipes', getAllRecipes);

module.exports = router;