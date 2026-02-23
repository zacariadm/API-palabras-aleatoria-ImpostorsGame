const express = require('express')
const randomWord = require('../controllers/randomWord.js')
const randomWordByLength = require('../controllers/randomWordByLength.js')
const router = express.Router()

//random word category marcas_coche
router.get('/palabra/marcas_coche', async (req, res) =>{
    try {
        const word = await randomWord('marcas_coche')
        res.status(200).json({"palabra": word})
    }catch (err) {
        res.status(500).json({"error": err})
    } 
})

//random word category marcas_coche by length
router.get('/palabra/marcas_coche/:len', async (req, res) =>{
    try {
        console.log(req.params.len)
        const word = await randomWordByLength('marcas_coche',parseInt(req.params.len))
        res.status(200).json({"palabra": word})
    }catch (err) {
        res.status(500).json({"error": err.message})
    }
})

module.exports = router