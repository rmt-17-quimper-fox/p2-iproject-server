const { User, Watchlist } = require("../models");
const { getSerieById } = require("../apis/TMDB");

const getWatchList = async (req, res, next) => {
  const UserId = +req.user.id;
  try {
    const watchlist = await Watchlist.findAll({ where: { UserId } });
    res.status(200).json(watchlist);
  } catch (err) {
    next(err);
  }
};

const postWatchList = async (req, res, next) => {
  const UserId = +req.user.id;
  const SerialId = +req.params.serialId;

  try {
    const foundSeries = await getSerieById(SerialId);
    if (!foundSeries) throw { name: "NotFound" };
    const seriesDetail = {
      id: foundSeries.data.id,
      title: foundSeries.data.name,
      nextAir: foundSeries.data.next_episode_to_air.air_date
    };
    const foundWatchlist = await Watchlist.findOne({
      where: { UserId, SerialId },
    });
    if (foundWatchlist) throw { name: "DuplicateWatchlist" };
    const newWatchlist = await Watchlist.create({
      UserId,
      SerialId,
      serialTitle: seriesDetail.title,
      serialNextAir: new Date (seriesDetail.nextAir)
    });
    const message = `${foundSeries.data.name} has been added to your watchlist.`;
    res.status(201).json({ newWatchlist, seriesDetail, message });
  } catch (err) {
    next(err);
  }
};

const deleteWatchList = async (req, res, next) => {
  try {
    const id = +req.params.watchlistId;
    const UserId = +req.user.id;
    let foundWatchList = await Watchlist.findOne({
      where: { id },
      include: { model: User },
    });
    if (!foundWatchList) throw { name: "NotFound" };
    if (foundWatchList.UserId !== UserId) throw { name: "Forbidden" };
    const foundSeries = await getSerieById(foundWatchList.SerialId);
    if (!foundSeries) throw { name: "NotFound" };
    const deletedWatchList = {
      id: foundSeries.data.id,
      title: foundSeries.data.name,
    };
    await Watchlist.destroy({ where: { id } });
    const message = `${deletedWatchList.title} has been removed from your watchlist`;
    res.status(200).json({ message });
  } catch (err) {
    next(err);
  }
};

module.exports = { getWatchList, postWatchList, deleteWatchList };
