const express = require('express')
const app = express()

app.get('/hotdog', (req, res) => {
  // res.json({name:'John Doe'})
  // res.sendStatus(418)
  // console.log(req.query)
  res.send('Hello!')
})

app.get('/', (req, res) => {
  let result = 0

  const x = parseInt(req.query.a)
  const y = parseInt(req.query.b)

  switch (req.query.op) {
    case 'add':
      result = x + y
      break
    case 'subtract':
      result = x - y
      break
    case 'multiply':
      result = x * y
      break
    case 'divide':
      result = x / y
      break
    case 'exponent':
      result = x ** y
      break
    case 'remain':
      result = `${Math.floor(x / y)} remainder ${x % y}`
  }
  res.send(`The result is ${result}`)
})

app.listen(3000)
