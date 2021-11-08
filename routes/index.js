const router = require("express").Router();

const authenticateUser = require("../middlewares/authentication");
const errorHandler = require("../middlewares/errorHandler");

router.get('/', (req,res)=>{res.send('Welcome to BingeBuddy')})
router.post("/register", (req,res)=>{res.send('Register')});
router.post("/login", (req,res)=>{res.send('Login')});
router.post("/googleSignIn", (req,res)=>{res.send('googleLogin')});
router.get("/checkToken", (req,res)=>{res.send('checkToken')});
router.use(authenticateUser);



module.exports = router;