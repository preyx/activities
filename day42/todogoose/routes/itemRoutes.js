const router = require('express').Router()
const { Item, User } = require('../models')
const passport = require('passport')
// GET all items
// router.get('/items', (req, res) => Item.find()
//   .then(items => res.json(items))
//   .catch(e => console.error(e)))

// POST one item
router.post('/items', passport.authenticate('jwt'), (req, res) => {
  console.log(req.user)
  Item.create({
    text: req.body.text,
    isDone: req.body.isDone,
    owner: req.user._id
  })
    .then(({ _id }) => {
      User.findByIdAndUpdate(req.user._id, { $push: { items: _id } })
        .then(() => res.sendStatus(200))
    })
    .catch(e => console.error(e))
})

// PUT one item
router.put('/items/:id', (req, res) => Item.findByIdAndUpdate(req.params.id, req.body)
  .then(() => res.sendStatus(200))
  .catch(e => console.error(e)))

// DELETE one item
router.delete('/items/:id', (req, res) => Item.findByIdAndDelete(req.params.id)
  .then(({ _id, owner }) => {
    User.findByIdAndUpdate(owner, { $pull: { items: _id } })
      .then(() => res.sendStatus(200))
  })
  .catch(e => console.error(e)))

module.exports = router
