const express = require('express')
const randomWord = require('../controllers/randomWord.js')
const randomWordByLength = require('../controllers/randomWordByLength.js')
const router = express.Router()

//random word category prendas_ropa
router.get('/palabra/prendas_ropa', async (req, res) =>{
    try {
        const word = await randomWord('prendas_ropa')
        res.status(200).json({"palabra": word})
    }catch (err) {
        res.status(500).json({"error": err})
    } 
})

//random word category prendas_ropa by length
router.get('/palabra/prendas_ropa/:len', async (req, res) =>{
    try {
        console.log(req.params.len)
        const word = await randomWordByLength('prendas_ropa',parseInt(req.params.len))
        res.status(200).json({"palabra": word})
    }catch (err) {
        res.status(500).json({"error": err.message})
    }
})

module.exports = router