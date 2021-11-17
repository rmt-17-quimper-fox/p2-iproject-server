const router = require("express").Router();
const { fetchSeries, fetchSerieById , fetchSeasonById} = require("../controllers/seriesController");

router.get('/', fetchSeries)
router.get('/:id',fetchSerieById)
router.get('/:id/season/:season',fetchSeasonById)

module.exports = router