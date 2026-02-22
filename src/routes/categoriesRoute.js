const express = require('express')
const data = require('../files/words.json');
const router = express.Router()

router.get('/categorias', (req, res) => {
    try {
        const categorias = Object.keys(data)
        res.status(200).json(categorias)
    } catch (err) {
        res.status(500).json({ error: err })
    }
})

module.exports = router