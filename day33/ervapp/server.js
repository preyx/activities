const express = require('express')
const { join } = require('path')
const app = express()

app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static(join(__dirname, 'public')))
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'jsx')

const something = 'hotdog'

app.get('/', (req, res) => {
  res.render('home', { hotdog: something })
})

app.listen(3000)
