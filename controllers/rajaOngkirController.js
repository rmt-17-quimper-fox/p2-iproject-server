const axios = require('axios');

class RajaOngkirController {
  static async getCity(req, res, next) {
    try {
      const response = await axios({
        url: `https://api.rajaongkir.com/starter/city
          `,
        method: 'GET',
        headers: {
          key: '0abeae74beec0b8adc3322e6f0cd69cc',
        },
      });
      // console.log(response.data.rajaongkir.results);

      const data = response.data.rajaongkir.results;

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = RajaOngkirController;
