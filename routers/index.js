const Controller = require("../controllers/controller");
let express = require("express");
const { userAut } = require("../middleware/middleware");

let router = express.Router();

//create VA
router.post("/createva", Controller.createVa);
//Get Va
router.post("/callback", Controller.callback);
router.get("/getva", Controller.getVa);
router.post("/payment", Controller.payment);
router.get("/balance", Controller.getBalance);

router.get("/currency", Controller.currencyApi);
router.post("/register", Controller.register); //making
router.post("/login", Controller.login); //making
router.get("/data", Controller.data); //making
router.get("/detail/:id", Controller.dataById); //making
router.patch("/detail/addseat", Controller.addSeat); //making
router.patch("/detail/reduceseat", Controller.reduceSeat); //making

router.post("/addbook", userAut, Controller.addbook);
router.delete("/deletecart", userAut, Controller.deleteCart);
router.get("/databyuser", userAut, Controller.dataByUser);

module.exports = router;
