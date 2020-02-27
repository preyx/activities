const express = require('express')
const { join } = require('path')
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

app.get('/count', (req, res) => {
  res.render('count')
})

app.get('/list', (req, res) => {
  let listItems = ['test1', 'test2', 'text3']
  res.render('list', { list: listItems })
})

app.listen(3000)
