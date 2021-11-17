const express = require('express');
const router = express.Router();

router.post('/recipes', async (req, res) => {
    res.send('Hello World!')
})

module.exports = router;