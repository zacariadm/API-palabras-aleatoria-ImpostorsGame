const express = require('express')
const randomWord = require('../controllers/randomWord.js')
const randomWordByLength = require('../controllers/randomWordByLength.js')
const router = express.Router()

//random word category juegos
router.get('/palabra/juegos', async (req, res) =>{
    try {
        const word = await randomWord('juegos')
        res.status(200).json({"palabra": word})
    }catch (err) {
        res.status(500).json({"error": err})
    } 
})

//random word category juegos by length
router.get('/palabra/juegos/:len', async (req, res) =>{
    try {
        console.log(req.params.len)
        const word = await randomWordByLength('juegos',parseInt(req.params.len))
        res.status(200).json({"palabra": word})
    }catch (err) {
        res.status(500).json({"error": err.message})
    }
})

module.exports = router