const express = require('express')
const sequelize = require('./config')

const app = express()
app.use(require('./routes'))

sequelize.sync()
  .then(_ => app.listen(3000))
  .catch (e => console.error(e))
