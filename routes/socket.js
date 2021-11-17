
const express = require('express');
const router = express.Router()
const fileUpload = require("express-fileupload");


router.use(fileUpload());

router.post('/attachimg', )