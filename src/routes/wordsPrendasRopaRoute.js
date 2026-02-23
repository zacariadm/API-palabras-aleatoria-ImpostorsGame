const express = require('express')
const randomWord = require('../controllers/randomWord.js')
const randomWordByLength = require('../controllers/randomWordByLength.js')
const router = express.Router()

//random word category Prendas de ropa
router.get('/palabra/Prendas de ropa', async (req, res) =>{
    try {
        const word = await randomWord('Prendas de ropa')
        res.status(200).json({"palabra": word})
    }catch (err) {
        res.status(500).json({"error": err})
    } 
})

//random word category Prendas de ropa by length
router.get('/palabra/Prendas de ropa/:len', async (req, res) =>{
    try {
        console.log(req.params.len)
        const word = await randomWordByLength('Prendas de ropa',parseInt(req.params.len))
        res.status(200).json({"palabra": word})
    }catch (err) {
        res.status(500).json({"error": err.message})
    }
})

module.exports = router