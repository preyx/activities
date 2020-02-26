const router = require('express').Router()
const { getItems, createItem, updateItem, deleteItem } = require('../controllers/itemController')

// GET all items
router.get('/items', (req, res) => getItems(items => res.json(items)))

// POST an item
router.post('/items', (req, res) => createItem(req.body, _ => res.sendStatus(200)))

// PUT an item
router.put('/items/:id', (req, res) => updateItem(req.body, req.params.id, _ => res.sendStatus(200)))

// DELETE an item
router.delete('/items/:id', (req, res) => deleteItem(req.params.id, _ => res.sendStatus(200)))

module.exports = router
