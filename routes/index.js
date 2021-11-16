const router = require("express").Router();
const errorHandler = require('../middlewares/errorHandler')

router.get("/", (req, res) => {
  res.send("home");
});


router.post('/register', (req, res) => {
    res.send("register");
  });
router.post('/login',(req, res) => {
    res.send("login");
  });

router.use(errorHandler)

module.exports = router;   