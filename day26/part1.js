const express = require('express')
const app = express()

app.get('/users/:name', (req, res) => {
  console.log(req.params.name)
  res.sendStatus(200)
})

app.listen(3000)
