const router = require('express').Router()

router.use('/api', require('./listRoutes'))

module.exports = router
