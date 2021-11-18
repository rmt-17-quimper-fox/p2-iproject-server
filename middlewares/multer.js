const multer = require("multer")
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const getFile = upload.single('photo')

module.exports = getFile