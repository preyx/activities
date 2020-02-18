// building a server
const http = require('http')
const fs = require('fs')

const generatePage = (type, items) => {
  fs.readFile('index.html', 'utf8', (e, html) => {
    if (e) console.log()
    html.replace('[[type]]', type)
    let listItems = ''
    items.forEach(element => {
      listItems += `<li>${element}</li>`
    })
    html.replace('[[list]]', listItems)
    return html
  })
}

const handleRequest = (req, res) => {
  console.log(req.url)

  switch (req.url) {
    case '/videogames':
      res.end(generatePage('Video Games', ['Zelda: Ocarina of Time', 'Final Fantasy XIV', 'Xenogears', 'Valkyrie Profile', 'Civilization']))
      break
    case '/movies':
      res.end('<p>Goodfellas</p>\n<p>Your Name</p>\n<p>John Wick</p>\n<p>Princess Mononoke</p>\n<p>Summer Wars</p>')
      break
    case '/books':
      res.end('<p>2001: A Space Odyssey</p>\n<p>Ender\'s Game</p>\n<p>I, Robot</p>\n<p>Patriot Games</p>\n<p>Rendevous With Rama</p>')
      break
    case '/songs':
      res.end('<p>Chuck Magione - Feels So Good</p>\n<p>Radiohead - Idioteque</p>\n<p>The Script - Hall of Fame</p>\n<p>The Midnight - Days of Thunder</p>\n<p>Michael Jackson - Smooth Criminal</p>')
      break
    case '/brew':
      res.end('')
    default:
      res.end('<h1>Hello world</h1>')
  }
  // res.end(html)

  // switch(req.url) {
  //   case '/videogames':
  //     res.end('<p>Zelda: Ocarina of Time</p>\n<p>Final Fantasy XIV</p>\n<p>Xenogears</p>\n<p>Valkyrie Profile</p>\n<p>Civilization</p>')
  //     break
  //   case '/movies':
  //     res.end('<p>Goodfellas</p>\n<p>Your Name</p>\n<p>John Wick</p>\n<p>Princess Mononoke</p>\n<p>Summer Wars</p>')
  //     break
  //   case '/books':
  //     res.end('<p>2001: A Space Odyssey</p>\n<p>Ender\'s Game</p>\n<p>I, Robot</p>\n<p>Patriot Games</p>\n<p>Rendevous With Rama</p>')
  //     break
  //   case '/songs':
  //     res.end('<p>Chuck Magione - Feels So Good</p>\n<p>Radiohead - Idioteque</p>\n<p>The Script - Hall of Fame</p>\n<p>The Midnight - Days of Thunder</p>\n<p>Michael Jackson - Smooth Criminal</p>')
  //     break
  //   case '/brew':
  //     res.end('')
  //   default:
  //     res.end('<h1>Hello world</h1>')
  // }
}
const server = http.createServer(handleRequest)
// http://localhost:3000
server.listen(3000)

// localhost:3000/videogames
// localhost:3000/movies
// localhost:3000/books
// localhost:3000/songs