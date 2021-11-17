const axios = require("axios");

const TMDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZGZjN2U1YWI3OTE0ODJmNDk5ODVmNDg4MjFhMDczMSIsInN1YiI6IjYxODk2NTMzZmU2MzE4MDA4ZmJjMjc3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TlGTu53U6jBf3MySspNoljP2sEg9BqJe9R_XEC5jeU8`,
    "Content-Type": "application/json;charset=utf-8",
  },
});

function getSeries(sortBy, page, search) {//popular or top_rated
  if(!search){
    return TMDB({
      method: "get",
      url: `/tv/${sortBy}?language=en-US&page=${page}`,
    });
  }
  else{
    return TMDB({
      method: "get",
      url: `search/tv?language=en-US&query=${search}&page=${page}`,
    });
  }
}

function getSerieById(id) {
  return TMDB({
    method: "get",
    url: `tv/${id}`,
  });
}

function getSeasonById(id, season) {
  return TMDB({
    method: "get",
    url: `tv/${id}/season/${season}`,
  });
}

function getMovies(sortBy, page) {
  //popular or top_rated
  return TMDB({
    method: "get",
    url: `movie/${sortBy}?language=en-US&page=${page}`,
  });
}

function getMovieById(id) {
  return TMDB({
    method: "get",
    url: `movie/${id}`,
  });
}

module.exports = {
  getSeries,
  getMovies,
  getMovieById,
  getSerieById,
  getSeasonById,
};
