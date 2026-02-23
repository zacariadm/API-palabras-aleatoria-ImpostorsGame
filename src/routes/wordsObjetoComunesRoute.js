const express = require('express')
const randomWord = require('../controllers/randomWord.js')
const randomWordByLength = require('../controllers/randomWordByLength.js')
const router = express.Router()

//random word category objects
router.get('/palabra/objeto_comunes', async (req, res) =>{
    try {
        const word = await randomWord('objeto_comunes')
        res.status(200).json({"palabra": word})
    }catch (err) {
        res.status(500).json({"error": err})
    } 
})

//random word category objects by length
router.get('/palabra/objeto_comunes/:len', async (req, res) =>{
    try {
        console.log(req.params.len)
        const word = await randomWordByLength('objetos_comunes',parseInt(req.params.len))
        res.status(200).json({"palabra": word})
    }catch (err) {
        res.status(500).json({"error": err.message})
    }
})

module.exports = router