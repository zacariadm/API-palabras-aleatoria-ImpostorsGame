const express = require('express')
const randomWord = require('../controllers/randomWord.js')
const randomWordByLength = require('../controllers/randomWordByLength.js')
const router = express.Router()

//random word category general
router.get('/palabra/general', async (req, res) =>{
    try {
        const word = await randomWord('general')
        res.status(200).json({"palabra": word})
    }catch (err) {
        res.status(500).json({"error": err})
    } 
})

//random word category general by length
router.get('/palabra/general/:len', async (req, res) =>{
    try {
        console.log(req.params.len)
        const word = await randomWordByLength('general',parseInt(req.params.len))
        res.status(200).json({"palabra": word})
    }catch (err) {
        res.status(500).json({"error": err.message})
    }
})

module.exports = router