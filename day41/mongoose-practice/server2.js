const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const Movie = mongoose.model('movie', new mongoose.Schema({
  text: String,
}))
const Game = mongoose.model('game', new mongoose.Schema({
  text: String,
}))
const Song = mongoose.model('song', new mongoose.Schema({
  text: String,
}))

app.get('/games', (req, res) => {
  Game.find()
    .then(items => res.json(items))
    .catch(e => console.error(e))
})

app.post('/games', (req, res) => {
  Game.create(req.body)
    .then(() => res.sendStatus(200))
    .catch(e => console.error(e))
})

app.put('/games/:id', (req, res) => {
  Game.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(e => console.error(e))
})

app.delete('/games/:id', (req, res) => {
  Game.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(e => console.error(e))
})    

app.get('/movies', (req, res) => {
  Movie.find()
    .then(items => res.json(items))
    .catch(e => console.error(e))
})

app.post('/movies', (req, res) => {
  Movie.create(req.body)
    .then(() => res.sendStatus(200))
    .catch(e => console.error(e))
})

app.put('/movies/:id', (req, res) => {
  Movie.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(e => console.error(e))
})

app.delete('/movies/:id', (req, res) => {
  Movie.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(e => console.error(e))
})    

app.get('/songs', (req, res) => {
  Song.find()
    .then(items => res.json(items))
    .catch(e => console.error(e))
})

app.post('/songs', (req, res) => {
  Song.create(req.body)
    .then(() => res.sendStatus(200))
    .catch(e => console.error(e))
})

app.put('/songs/:id', (req, res) => {
  Song.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(e => console.error(e))
})

app.delete('/songs/:id', (req, res) => {
  Song.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(e => console.error(e))
})    

mongoose.connect('mongodb://localhost/favoritesdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => app.listen(3000))
  .catch(e => console.error(e))
