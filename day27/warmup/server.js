const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/fridge', (req, res) => {
  fs.readFile('./fridge.json', 'utf8', (err, fridge) => {
    if (err) { console.log(err) }
    res.json(JSON.parse(fridge))
  })
})

app.get('/fridge/:item', (req, res) => {
  fs.readFile('./fridge.json', 'utf8', (err, data) => {
    if (err) { console.log(err) }
    const fridge = JSON.parse(data)
    res.json(fridge.filter(food => food.name === req.params.item)[0])
  })
})

app.post('/fridge', (req, res) => {
  fs.readFile('./fridge.json', 'utf8', (err, data) => {
    if (err) { console.log(err) }
    const fridge = JSON.parse(data)
    fridge.push(req.body)
    fs.writeFile('./fridge.json', JSON.stringify(fridge),
      err => {
        if (err) { console.log(err) }
        res.sendStatus(200)
      })
  })
})

app.listen(3000)
