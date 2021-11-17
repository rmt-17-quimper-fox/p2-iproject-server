const { getSeries, getSerieById, getSeasonById } = require("../apis/TMDB");
const getTrailer = require("../apis/YouTube");
const { dateFormatter } = require("../helpers/dateConverter");

const fetchSeries = async (req, res, next) => {
  let { sortBy, page, search } = req.query;
  try {
    page = page ? page : 1;
    search = search ? search : null;
    sortBy = sortBy ? sortBy : "popular";
    const { data } = await getSeries(sortBy, page, search);
    const seriesList = data.results.map((serie) => {
      return {
        id: serie.id,
        title: serie.name,
        originalTitle: serie.original_name,
        origin: serie.origin_country.join(","),
        popularity: parseInt(serie.popularity),
        imgURL: `https://image.tmdb.org/t/p/w500${serie.poster_path}`,
        releaseYear: serie.first_air_date
          ? +new Date(serie.first_air_date).getFullYear()
          : "N/A",
      };
    });
    res.status(200).json({
      page: data.page,
      total_pages: data.total_pages,
      total_results: data.total_results,
      seriesList,
    });
  } catch (err) {
    next(err);
  }
};

const fetchSerieById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const { data } = await getSerieById(id);

    const seriesDetail = {
      id: data.id,
      title: data.name,
      originalTitle: data.original_name,
      createdBy:
        data.created_by.length < 1
          ? "N/A"
          : data.created_by
              .map((creator) => {
                return creator.name;
              })
              .join(",  "),
      avg_length: data.episode_run_time.join(","),
      genre: data.genres.length>0 ? data.genres
        .map((genre) => {
          return genre.name;
        })
        .join(", "): 'N/A',
      homePage: data.homepage,
      firstAired: data.first_air_date
        ? dateFormatter(data.first_air_date)
        : "In Production",
      lastAired: data.last_air_date
        ? dateFormatter(data.last_air_date)
        : "On Going",
      networks: data.networks.map((network) => {
        return {
          name: network.name,
          logo: `https://image.tmdb.org/t/p/w500${network.logo_path}`,
        };
      }),
      numberOfEpisodes: data.number_of_episodes,
      numberOfseasons: data.number_of_seasons,
      seasonsList: data.seasons
        .map((season) => {
          return season.name;
        })
        .join(", "),
      seasons: data.seasons.map((season) => {
        return {id: season.season_number,
          seasonTitle: season.name}
      }),
      overview: data.overview,
      popularity: data.popularity,
      imgURL: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
      status: data.status,
      tagline: data.tagline ? data.tagline : "N/A",
    };
    trailer = await getTrailer(data.name);
    seriesDetail.trailer = trailer 
    res.status(200).json(seriesDetail);
  } catch (err) {
    next(err);
  }
};

const fetchSeasonById = async (req, res, next) => {
  const { id, season } = req.params;
  try {
    const { data } = await getSeasonById(id, season);
    const seasonDetails = {

      seasonTitle: data.name,
      episodes: data.episodes.map((episode) => {
        return {
          title: episode.name,
          episodeNumber: episode.episode_number,
          overview: episode.overview? episode.overview: 'N/A',
          airDate: episode.air_date ? dateFormatter(episode.air_date) : "TBA",
        };
      }),
    };
    res.status(200).json(seasonDetails);
  } catch (err) {
    next(err);
  }
};

module.exports = { fetchSeries, fetchSerieById, fetchSeasonById };
