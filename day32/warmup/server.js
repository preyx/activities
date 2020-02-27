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
  res.render('home', { name: 'World' })
})

app.get('/:name', (req, res) => {
  res.render('home', { name: req.params.name })
})

app.listen(3000)
