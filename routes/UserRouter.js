const express = require('express');
const router = express.Router();

router.get('/users', async (req, res) => {
    res.send('Hello World!')
})
router.patch('/users/:id', async (req, res) => {
    res.send('Hello World!')
})

module.exports = router;