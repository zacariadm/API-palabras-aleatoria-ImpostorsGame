const express = require('express')
const randomWord = require('../controllers/randomWord.js')
const randomWordByLength = require('../controllers/randomWordByLength.js')
const router = express.Router()

//random word category Marcas de coche
router.get('/palabra/Marcas de coche', async (req, res) =>{
    try {
        const word = await randomWord('Marcas de coche')
        res.status(200).json({"palabra": word})
    }catch (err) {
        res.status(500).json({"error": err})
    } 
})

//random word category Marcas de coche by length
router.get('/palabra/Marcas de coche/:len', async (req, res) =>{
    try {
        console.log(req.params.len)
        const word = await randomWordByLength('Marcas de coche',parseInt(req.params.len))
        res.status(200).json({"palabra": word})
    }catch (err) {
        res.status(500).json({"error": err.message})
    }
})

module.exports = router