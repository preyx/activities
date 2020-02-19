const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public')))
// app.get('/employees', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'))
// })

app.get('/employees', (req, res) => {
  fs.readFile('employees.json', 'utf8', (e, data) => {
    if (e) console.log(e)
    const employees = JSON.parse(data)
    console.log(employees)
  })
  res.sendStatus(204)
})

app.post('/employees', (req, res) => {
  fs.readFile('employees.json', 'utf8', (e, data) => {
    if (e) console.log(e)
    const employees = JSON.parse(data)
    // req.body
    employees.push(req.body)
    fs.writeFile('employees.json', JSON.stringify(employees), e => {
      if (e) console.log(e)
      res.sendStatus(200)
    })
  })
  res.sendStatus()
})

app.listen(3000)
