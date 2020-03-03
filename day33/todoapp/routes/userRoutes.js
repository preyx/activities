const router = require('express').Router()
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/userController.js')

// GET all users
router.get('/users', (req, res) => getUsers(users => res.json(users)))

// GET one user
router.get('/users/:username', (req, res) => getUser(req.params.username, user => res.json(user)))

// POST an user
router.post('/users', (req, res) => createUser(req.body, () => res.sendStatus(200)))

// PUT an user
router.put('/users/:id', (req, res) => updateUser(req.body, req.params.id, () => res.sendStatus(200)))

// DELETE an user
router.delete('/users/:id', (req, res) => deleteUser(req.params.id, () => res.sendStatus(200)))

module.exports = router
