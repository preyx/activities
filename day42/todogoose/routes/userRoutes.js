const router = require('express').Router()
const { User } = require('../models')
const jwt = require('jsonwebtoken')

router.post('/users/login', (req, res) => {
  User.authenticate()(req.body.username, req.body.password, (err, user) => {
    if (err) throw err
    res.json({
      isLoggedIn: !!user,
      items: user.items,
      user: user.username,
      token: jwt.sign({ id: user._id }, 'hotdog')
    })
  })
})

router.post('/users/register', (req, res) => {
  User.register(new User({
    username: req.body.username,
    email: req.body.email
  }), req.body.password, err => {
    if (err) throw err
    res.sendStatus(200)
  })
})

// GET one user
// router.get('/users/:id', (req, res) => User.findById(req.params.id)
//   .populate('items')
//   .then(user => res.json(user))
//   .catch(e => console.error(e)))

// router.post('/users', (req, res) => User.create(req.body)
//   .then(() => res.sendStatus(200))
//   .catch(e => console.error(e)))

module.exports = router
