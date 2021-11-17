const express = require('express');
const router = express.Router();

router.post('/comments/:userId', async (req, res) => {
    res.send('Hello World!')
})
router.get('/comments/:recipeId', async (req, res) => {
    res.send('Hello World!')
})

module.exports = router;