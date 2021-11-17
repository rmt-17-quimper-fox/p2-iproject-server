const youtubesearchapi = require("youtube-search-api");

function getTrailer(title) {
  return youtubesearchapi
    .GetListByKeyword(`${title} Official Series Trailer`, false, 1)
    .then((res) => {
     return (`https://www.youtube.com/embed/${res.items[0].id}`); 
    });
}

module.exports = getTrailer




