const axios = require("axios");

const weatherAxios = axios.create({
  baseURL: "http://api.openweathermap.org/",
});
const currencyAxios = axios.create({
  baseURL: "https://freecurrencyapi.net/",
});

let privateKey = `xnd_development_mj2glQV8VKiEayUldu7pFQMHg8nGg2iyKzzSpoMWWR7AroHcrMeN1H067nKR8T:`;
let buffedPrivateKey = Buffer.from(privateKey).toString("base64");

const xenditAxios = axios.create({
  baseURL: "https://api.xendit.co/",
  headers: {
    Authorization: "Basic " + buffedPrivateKey,
  },
});

const callBack = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    Authorization: "Basic " + buffedPrivateKey,
    "x-callback-token": "H19aU9FoP9znVKj54fDk2ewYcdTwW1cawizBZutBHms7VNSh",
  },
});
// console.log(xenditAxios);

const xenditBalance = () => {
  return xenditAxios({
    method: "get",
    url: `balance?account_type=CASH`,
  });
};

const xenditPayment = (obj) => {
  return xenditAxios({
    method: "post",
    url: `callback_virtual_accounts/external_id=va-1212121212121/simulate_payment`,
    data: obj,
  });
};

const xenditCallback = (obj) => {
  return callBack({
    method: "post",
    url: `virtual_account_paid_callback_url`,
  });
};

const xenditCreateVa = (payload) => {
  return xenditAxios({
    method: "post",
    url: `callback_virtual_accounts`,
    data: payload,
  });
};

const xenditGetVa = (payload) => {
  return xenditAxios({
    method: "get",
    url: `callback_virtual_accounts/${payload.id}`,
  });
};

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

module.exports = {
  weather,
  currency,
  xenditBalance,
  xenditCreateVa,
  xenditPayment,
  xenditGetVa,
  xenditCallback,
};
