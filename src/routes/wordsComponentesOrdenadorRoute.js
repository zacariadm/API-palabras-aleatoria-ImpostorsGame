const express = require('express')
const randomWord = require('../controllers/randomWord.js')
const randomWordByLength = require('../controllers/randomWordByLength.js')
const router = express.Router()

//random word category Componentes de ordenador
router.get('/palabra/Componentes de ordenador', async (req, res) =>{
    try {
        const word = await randomWord('Componentes de ordenador')
        res.status(200).json({"palabra": word})
    }catch (err) {
        res.status(500).json({"error": err})
    } 
})

//random word category Componentes de ordenador by length
router.get('/palabra/Componentes de ordenador/:len', async (req, res) =>{
    try {
        console.log(req.params.len)
        const word = await randomWordByLength('Componentes de ordenador',parseInt(req.params.len))
        res.status(200).json({"palabra": word})
    }catch (err) {
        res.status(500).json({"error": err.message})
    }
})

module.exports = router