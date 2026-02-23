const express = require('express')
const randomWord = require('../controllers/randomWord.js')
const randomWordByLength = require('../controllers/randomWordByLength.js')
const router = express.Router()

//random word category comunidades_autonomas_espana
router.get('/palabra/comunidades_autonomas_espana', async (req, res) =>{
    try {
        const word = await randomWord('comunidades_autonomas_espana')
        res.status(200).json({"palabra": word})
    }catch (err) {
        res.status(500).json({"error": err})
    } 
})

//random word category comunidades_autonomas_espana by length
router.get('/palabra/comunidades_autonomas_espana/:len', async (req, res) =>{
    try {
        console.log(req.params.len)
        const word = await randomWordByLength('comunidades_autonomas_espana',parseInt(req.params.len))
        res.status(200).json({"palabra": word})
    }catch (err) {
        res.status(500).json({"error": err.message})
    }
})

module.exports = router