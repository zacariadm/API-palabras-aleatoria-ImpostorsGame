const express = require('express')
const randomWord = require('../controllers/randomWord.js')
const randomWordByLength = require('../controllers/randomWordByLength.js')
const router = express.Router()

//random word category Deportes
router.get('/palabra/Deportes', async (req, res) =>{
    try {
        const word = await randomWord('Deportes')
        res.status(200).json({"palabra": word})
    }catch (err) {
        res.status(500).json({"error": err})
    } 
})

//random word category Deportes by length
router.get('/palabra/Deportes/:len', async (req, res) =>{
    try {
        console.log(req.params.len)
        const word = await randomWordByLength('Deportes',parseInt(req.params.len))
        res.status(200).json({"palabra": word})
    }catch (err) {
        res.status(500).json({"error": err.message})
    }
})

module.exports = router