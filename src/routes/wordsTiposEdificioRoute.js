const express = require('express')
const randomWord = require('../controllers/randomWord.js')
const randomWordByLength = require('../controllers/randomWordByLength.js')
const router = express.Router()

//random word category Tipos de edificios
router.get('/palabra/Tipos de edificios', async (req, res) =>{
    try {
        const word = await randomWord('Tipos de edificios')
        res.status(200).json({"palabra": word})
    }catch (err) {
        res.status(500).json({"error": err})
    } 
})

//random word category Tipos de edificios by length
router.get('/palabra/Tipos de edificios/:len', async (req, res) =>{
    try {
        console.log(req.params.len)
        const word = await randomWordByLength('Tipos de edificios',parseInt(req.params.len))
        res.status(200).json({"palabra": word})
    }catch (err) {
        res.status(500).json({"error": err.message})
    }
})

module.exports = router