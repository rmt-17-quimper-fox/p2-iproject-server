const { imgApi } = require('../apis/ImageApiKit');
const FormData = require('form-data');

const imageKitApi = async (req, res, next) => {
  try {
    if (req.file) {
      if (req.file.size > 255000) {
        throw { name: 'BigSize' };
      }

      if (
        req.file.mimetype !== 'image/jpg' &&
        req.file.mimetype !== 'image/jpeg' &&
        req.file.mimetype !== 'image/png'
      ) {
        throw { name: 'InvalidFormatImg' };
      }

      const { originalname, buffer } = req.file;

      const formatedFile = Buffer.from(buffer).toString('base64');

      const form = new FormData();

      form.append('file', formatedFile);
      form.append('fileName', originalname);
      const response = await imgApi(form);
      if (response) {
        req.body.imgUrl = response.data.url;
      }
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { imageKitApi };
