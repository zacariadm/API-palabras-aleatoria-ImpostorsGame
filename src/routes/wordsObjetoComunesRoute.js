const express = require('express')
const randomWord = require('../controllers/randomWord.js')
const randomWordByLength = require('../controllers/randomWordByLength.js')
const router = express.Router()

//random word category Objetos comunes
router.get('/palabra/Objetos comunes', async (req, res) =>{
    try {
        const word = await randomWord('Objetos comunes')
        res.status(200).json({"palabra": word})
    }catch (err) {
        res.status(500).json({"error": err})
    } 
})

//random word category Objetos comunes by length
router.get('/palabra/Objetos comunes/:len', async (req, res) =>{
    try {
        console.log(req.params.len)
        const word = await randomWordByLength('Objetos comunes',parseInt(req.params.len))
        res.status(200).json({"palabra": word})
    }catch (err) {
        res.status(500).json({"error": err.message})
    }
})

module.exports = router