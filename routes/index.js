const express = require('express');
const router = express.Router();
const userRouter = require('./UserRouter');
const thirdPartyRouter = require('./ThirdPartyRouter'); 
const recipeRouter = require('./RecipeRouter');
const commentRouter = require('./CommentRouter');
const { getJwtToken, getPayload } = require('../helpers/auth');
const { hashPassword, comparePassword } = require('../helpers/bcrypt');
const errorHandler = require('../middlewares/errorHandler');
const { User } = require('../models');

router.post('/register', async (req, res, next) => {
    try {
        let latestId;
        const latestUser = await User.findOne({ order: [ [ 'createdAt', 'DESC' ] ] });
        if(!latestUser) {
            latestId = 1;
        } else {
            latestId = latestUser.id;
        }
        const { username, email, password } = req.body;
        const payload = {
            id: latestId+1,
            email
        };
        const token = getJwtToken(payload);
        let resp = await User.create({ username, email, password, token});
        resp = {
            id: resp.id,
            email: resp.email,
        };
        res.status(201).json(resp);
    } catch (error) {
        next(error);
    }
})
router.post('/login', async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if(!email) {
            throw { name: 'Email is empty' }
        }
        if(!password) {
            throw { name: 'Password is empty' }
        }
        const resp = await User.findOne({
            where: { email }
        });
        if(!resp) {
            throw { name: 'Invalid email/password' };
        };
        const hashedPassword = resp.password;
        const isPasswordCorrect = comparePassword(password, hashedPassword);
        if(!isPasswordCorrect) {
            throw { name: 'Invalid email/password' };
        }
        const payload = {
            id: resp.id,
            email: resp.email
        };
        const token = getJwtToken(payload);
        res.status(200).json({ access_token: token });
    } catch (error) {
        next(error); 
    }
})
router.patch('/forgetpasswords', async (req, res, next) => {
    res.send('Hello World!')
})
router.patch('/resetpasswords', async (req, res, next) => {
    res.send('Hello World!')
})

// router.use()
router.use(thirdPartyRouter)
router.use(userRouter)
router.use(recipeRouter)
router.use(commentRouter)
router.use(errorHandler);

module.exports = router;