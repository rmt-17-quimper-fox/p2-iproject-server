const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const multerImg = upload.single('imgUrl');

module.exports = { multerImg };
