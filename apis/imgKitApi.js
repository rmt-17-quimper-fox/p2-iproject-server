const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://upload.imagekit.io/api/v1/',
});

const imgApi = (data) => {
  const requestOption = {
    method: 'post',
    url: 'files/upload',
    data: data,
    headers: {
      Authorization: `Basic ${Buffer.from(
        process.env.IMAGEKIT_KEY + ':'
      ).toString('base64')}`,
      ...data.getHeaders(),
    },
  };
  return instance(requestOption);
};

module.exports = { imgApi };
