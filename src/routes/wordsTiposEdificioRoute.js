const express = require('express')
const randomWord = require('../controllers/randomWord.js')
const randomWordByLength = require('../controllers/randomWordByLength.js')
const router = express.Router()

//random word category tipos_edificio
router.get('/palabra/tipos_edificio', async (req, res) =>{
    try {
        const word = await randomWord('tipos_edificio')
        res.status(200).json({"palabra": word})
    }catch (err) {
        res.status(500).json({"error": err})
    } 
})

//random word category general by length
router.get('/palabra/tipos_edificio/:len', async (req, res) =>{
    try {
        console.log(req.params.len)
        const word = await randomWordByLength('tipos_edificio',parseInt(req.params.len))
        res.status(200).json({"palabra": word})
    }catch (err) {
        res.status(500).json({"error": err.message})
    }
})

module.exports = router