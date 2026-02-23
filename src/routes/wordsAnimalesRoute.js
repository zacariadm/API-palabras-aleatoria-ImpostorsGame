const express = require('express')
const randomWord = require('../controllers/randomWord.js')
const randomWordByLength = require('../controllers/randomWordByLength.js')
const router = express.Router()

//random word category animales
router.get('/palabra/animales', async (req, res) =>{
    try {
        const word = await randomWord('animales')
        res.status(200).json({"palabra": word})
    }catch (err) {
        res.status(500).json({"error": err})
    }
})

//random word category animales by length
router.get('/palabra/animales/:len', async (req, res) =>{
    try {
        console.log(req.params.len)
        const word = await randomWordByLength('animales',parseInt(req.params.len))
        res.status(200).json({"palabra": word})
    }catch (err) {
        res.status(500).json({"error": err.message})
    }
})

module.exports = router