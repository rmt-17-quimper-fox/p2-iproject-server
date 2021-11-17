const express = require('express');
const router = express.Router();
const userRouter = require('./UserRouter');
const thirdPartyRouter = require('./ThirdPartyRouter'); 
const recipeRouter = require('./RecipeRouter');
const commentRouter = require('./CommentRouter');

router.get('/register', async (req, res) => {
    res.send('Hello World!')
})
router.get('/login', async (req, res) => {
    res.send('Hello World!')
})
router.get('/forgetpasswords', async (req, res) => {
    res.send('Hello World!')
})
router.get('/resetpasswords', async (req, res) => {
    res.send('Hello World!')
})


// router.use()
router.use(thirdPartyRouter)
router.use(userRouter)
router.use(recipeRouter)
router.use(commentRouter)

module.exports = router;