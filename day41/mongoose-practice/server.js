const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const Item = mongoose.model('item', new mongoose.Schema({
  text: String,
  isDone: Boolean
}))

app.get('/items', (req, res) => {
  Item.find()
    .then(items => res.json(items))
    .catch(e => console.error(e))
})

app.post('/items', (req, res) => {
  Item.create(req.body)
    .then(() => res.sendStatus(200))
    .catch(e => console.error(e))
})

mongoose.connect('mongodb://localhost/tododb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => app.listen(3000))
  .catch(e => console.error(e))
