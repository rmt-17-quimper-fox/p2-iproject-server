const router = require("express").Router();

const { postRegister, postLogin, postGoogleSignIn } = require("../controllers/authController");
const authenticateUser = require("../middlewares/authentication");
const errorHandler = require("../middlewares/errorHandler");
const seriesRouter = require ('./series')
const watchlistRouter = require ('./watchlist')

router.get('/', (req,res)=>{res.send('Welcome to BingeBuddy')})
router.post("/register", postRegister);
router.post("/login", postLogin);
router.post("/googleSignIn", postGoogleSignIn);
router.use('/series',seriesRouter)
router.use(authenticateUser);
router.use('/watchlist', watchlistRouter)


router.use(errorHandler)



module.exports = router;