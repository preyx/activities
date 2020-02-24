const router = require('express').Router()

router.use('/api', require('./listRoutes.js'))

module.exports = router
