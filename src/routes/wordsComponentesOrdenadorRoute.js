const express = require('express')
const randomWord = require('../controllers/randomWord.js')
const randomWordByLength = require('../controllers/randomWordByLength.js')
const router = express.Router()

//random word category componentes_ordenador
router.get('/palabra/componentes_ordenador', async (req, res) =>{
    try {
        const word = await randomWord('componentes_ordenador')
        res.status(200).json({"palabra": word})
    }catch (err) {
        res.status(500).json({"error": err})
    } 
})

//random word category componentes_ordenador by length
router.get('/palabra/componentes_ordenador/:len', async (req, res) =>{
    try {
        console.log(req.params.len)
        const word = await randomWordByLength('componentes_ordenador',parseInt(req.params.len))
        res.status(200).json({"palabra": word})
    }catch (err) {
        res.status(500).json({"error": err.message})
    }
})

module.exports = router