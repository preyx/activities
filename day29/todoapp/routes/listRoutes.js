const router = require('express').Router()
const db = require('../config/db.js')

// GET all items
router.get('/items', (req, res) => {
  db.query('SELECT * FROM list', (err, list) => {
    if (err) { console.log(err) }
    res.json(list)
  })
})

// POST an item
router.post('/items', (req, res) => {
  db.query('INSERT INTO list SET ?', req.body, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

// PUT an item
router.put('/items/:id', (req, res) => {
  db.query('UPDATE list SET ? WHERE ?', [req.body, { id: req.params.id }], err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

// DELETE an item
router.delete('/items/:id', (req, res) => {
  db.query('DELETE FROM list WHERE ?', { id: req.params.id }, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

module.exports = router
