const express = require('express')
const randomWord = require('../controllers/randomWord.js')
const randomWordByLength = require('../controllers/randomWordByLength.js')
const router = express.Router()

//random word category deportes
router.get('/palabra/deportes', async (req, res) =>{
    try {
        const word = await randomWord('deportes')
        res.status(200).json({"palabra": word})
    }catch (err) {
        res.status(500).json({"error": err})
    } 
})

//random word category deportes by length
router.get('/palabra/deportes/:len', async (req, res) =>{
    try {
        console.log(req.params.len)
        const word = await randomWordByLength('deportes',parseInt(req.params.len))
        res.status(200).json({"palabra": word})
    }catch (err) {
        res.status(500).json({"error": err.message})
    }
})

module.exports = router