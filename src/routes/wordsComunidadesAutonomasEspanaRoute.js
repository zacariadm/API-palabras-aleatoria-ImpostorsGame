const express = require('express')
const randomWord = require('../controllers/randomWord.js')
const randomWordByLength = require('../controllers/randomWordByLength.js')
const router = express.Router()

//random word category Comunidades autonomas de ESPAÑA
router.get('/palabra/Comunidades autonomas de ESPAÑA', async (req, res) =>{
    try {
        const word = await randomWord('Comunidades autonomas de ESPAÑA')
        res.status(200).json({"palabra": word})
    }catch (err) {
        res.status(500).json({"error": err})
    } 
})

//random word category Comunidades autonomas de ESPAÑA by length
router.get('/palabra/Comunidades autonomas de ESPAÑA/:len', async (req, res) =>{
    try {
        console.log(req.params.len)
        const word = await randomWordByLength('Comunidades autonomas de ESPAÑA',parseInt(req.params.len))
        res.status(200).json({"palabra": word})
    }catch (err) {
        res.status(500).json({"error": err.message})
    }
})

module.exports = router