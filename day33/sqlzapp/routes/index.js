const router = require('express').Router()
const Hotdog = require('../models/Hotdog')

// GET all items
router.get('/api/hotdog', (req, res) => {
  Hotdog.findAll()
  .then(hotdogs => res.json(hotdogs))
  .catch(e => console.error(e))
})

// POST an item
router.post('/api/hotdog', (req, res) => {
Hotdog.create(req.body)
  .then(_ => console.log('Hotdog created!'))
  .catch(e => console.error(e))
})

// PUT an item
router.put('api/hotdog', (req, res) => {
  Hotdog.update({ price: req.body.price }, { where: { name: req.body.name } })
  .then(() => console.log('Hotdog updated!'))
  .catch(e => console.error(e))
})

// DELETE an item
router.delete('/items/:id', (req, res) => {
  Hotdog.destroy({ where: { name: req.body.name } })
  .then(() => console.log('Hotdog deleted!'))
  .catch(e => console.error(e))
})

module.exports = router
