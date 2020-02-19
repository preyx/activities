const express = require('express')
const app = express()

// http://localhost:3000/?username=johnDoe&password=pass1234

app.get('/', (req, res) => {
  // res.status(500)
  // res.json({name:'John Doe'})
  console.log(req.query.username)
  console.log(req.query.password)
  res.send('Hello!')
  res.sendStatus(200)
})

app.listen(3000)
