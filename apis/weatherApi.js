const axios = require("axios");

const weatherAxios = axios.create({
  baseURL: "http://api.openweathermap.org/",
});
const currencyAxios = axios.create({
  baseURL: "https://freecurrencyapi.net/",
});

const weather = (payload) => {
  return weatherAxios({
    method: "post",
    url: `data/2.5/weather?q=${payload}&APPID=aedf44221043977fe7e945893bad3f3b`,
  });
};
const currency = () => {
  return currencyAxios({
    method: "get",
    url: `api/v2/latest?apikey=465f5650-46b2-11ec-86bf-cb243a2d8500`,
  });
};

module.exports = { weather, currency };
