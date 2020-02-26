const express = require('express')
const { join } = require('path')
const app = express()

app.engine('.hbs', require('express-handlebars')({ extname: '.hbs' }))
app.use(express.static(join(__dirname, 'public')))
app.set('view engine', '.hbs')

// app.get('/', (req, res) => {
//   res.render('home')
// })

// const movies = ['Goodfellas', 'The Room', 'The Apple']

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/movies', (req, res) => {
  res.render('movies', {
    movies: ['Spirited Away', 'Your Name', 'Summer Wars']
  })
})

app.get('/books', (req, res) => {
  res.render('books', {
    books: ['2001', 'The Room', 'The Apple']
  })
})

app.get('/foods', (req, res) => {
  res.render('foods', {
    foods: ['steak', 'sushi', 'KBBQ']
  })
})

app.get('/songs', (req, res) => {
  res.render('songs', {
    songs: ['Wonderwall', 'Idioteque', 'Basketcase']
  })
})

// app.get('/:page', (req, res) => {
//   res.render(req.params.page)
// })

app.listen(3000)
