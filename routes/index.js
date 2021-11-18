const express = require('express');
const router = express.Router();
const userRouter = require('./UserRouter');
const thirdPartyRouter = require('./ThirdPartyRouter'); 
const recipeRouter = require('./RecipeRouter');
const commentRouter = require('./CommentRouter');
const authentication = require('../middlewares/auth');
const errorHandler = require('../middlewares/errorHandler');
const { register, login, forgotPassword, resetPassword } = require('../controllers/AuthControllers');

router.post('/register', register);
router.post('/login', login)
router.post('/forgotpassword', forgotPassword)
router.patch('/resetpassword', resetPassword)
router.use(authentication);
router.use(thirdPartyRouter);
router.use(userRouter);
router.use(recipeRouter)
router.use(commentRouter)
router.use(errorHandler);

module.exports = router;