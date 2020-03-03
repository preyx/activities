const router = require('express').Router()
const db = require('../config/db.js')

// GET all items
router.get('/items', (req, res) => {
  db.query('SELECT * FROM items', (err, items) => {
    if (err) { console.log(err) }
    res.json(items)
  })
})

// POST an item
router.post('/items', (req, res) => {
  db.query('INSERT INTO items SET ?', req.body, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

// PUT an item
router.put('/items/:id', (req, res) => {
  db.query('UPDATE items SET ? WHERE ?', [req.body, { itemid: req.params.id }], err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

// DELETE an item
router.delete('/items/:id', (req, res) => {
  db.query('DELETE FROM items WHERE ?', { itemid: req.params.id }, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

module.exports = router
