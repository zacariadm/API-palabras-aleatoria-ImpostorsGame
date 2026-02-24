const express = require('express')
const fs = require('fs')
const path = require('path')
const randomWord = require('../controllers/randomWord.js')
const randomWordByLength = require('../controllers/randomWordByLength.js')
const router = express.Router()

const WORDS_PATH = path.join(__dirname, '..', 'files', 'words.json')

async function resolveCategoryKey(rawCategory){
    const decoded = decodeURIComponent(rawCategory)
    const normalized = decoded.replace(/[-_]/g, ' ').trim()
    const jsonData = await fs.promises.readFile(WORDS_PATH, 'utf-8')
    const data = JSON.parse(jsonData)
    const keys = Object.keys(data)

    // try exact, then case-insensitive, then spaces-insensitive
    let match = keys.find(k => k === decoded)
    if (!match) match = keys.find(k => k.toLowerCase() === decoded.toLowerCase())
    if (!match) match = keys.find(k => k.toLowerCase() === normalized.toLowerCase())
    if (!match) {
        // special allowance: 'all' should map to 'all' used by controllers
        if (normalized.toLowerCase() === 'all' || normalized.toLowerCase() === 'todo') return 'all'
    }
    return match
}

// GET /api/palabra/:category
router.get('/palabra/:category', async (req, res) =>{
    try {
        const key = await resolveCategoryKey(req.params.category)
        if (!key) return res.status(404).json({ error: 'Categoria no encontrada' })
        const word = await randomWord(key)
        res.status(200).json({ palabra: word })
    } catch (err) {
        res.status(500).json({ error: err.message || err })
    }
})

// GET /api/palabra/:category/:len
router.get('/palabra/:category/:len', async (req, res) =>{
    try {
        const len = parseInt(req.params.len)
        if (isNaN(len)) return res.status(400).json({ error: 'Longitud inválida' })
        const key = await resolveCategoryKey(req.params.category)
        if (!key) return res.status(404).json({ error: 'Categoria no encontrada' })
        const word = await randomWordByLength(key, len)
        res.status(200).json({ palabra: word })
    } catch (err) {
        res.status(500).json({ error: err.message || err })
    }
})

module.exports = router
