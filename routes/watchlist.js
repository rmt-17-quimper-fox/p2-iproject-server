const router = require("express").Router();
const { postWatchList, getWatchList, deleteWatchList } = require("../controllers/watchlistController");
const { authorizeUser } = require("../middlewares/authorization");

router.get('/', getWatchList)
router.use(authorizeUser)
router.post('/:serialId', postWatchList)
router.delete('/:watchlistId',deleteWatchList)

module.exports = router