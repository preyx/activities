const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/videogames', (req, res) => {
  res.sendFile(path.join(__dirname, 'videogame.html'))
})

app.get('/movies', (req, res) => {
  res.sendFile(path.join(__dirname, 'movie.html'))
})

app.get('/books', (req, res) => {
  res.sendFile(path.join(__dirname, 'book.html'))
})

app.get('/songs', (req, res) => {
  res.sendFile(path.join(__dirname, 'song.html'))
})

// app.get('/hotdog', (req, res) => { ...code... })

app.listen(3000)
