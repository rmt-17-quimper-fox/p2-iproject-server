const express = require('express');
const router = express.Router();
const { postComment, getAllCommentByRecipeId } = require('../controllers/CommentControllers');

router.post('/comments/:userId', postComment);
router.get('/comments/:recipeId', getAllCommentByRecipeId);

module.exports = router;