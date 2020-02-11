const songs = require('./songs.js')
const books = require('./books.js')
const shows = require('./shows.js')
const movies = require('./movies.js')

const fs = require('fs')

// fs.writeFile('modules3.txt', 'Hello World!', e => e ? console.log(e) : null)
// fs.writeFile('modules3.txt', 'Goodbye World!', e => e ? console.log(e) : null)
// fs.appendFile('modules3.txt', 'Goodbye World!', e => e ? console.log(e) : null)

// fs.readFile('modules3.txt', 'utf8', (e, text) => e ? console.log(e) : console.log(text))

const writeArray = (label, arr) => {
  fs.appendFile('modules3.txt', (label + '\n'), e => e ? console.log(e) : null)
  arr.forEach(element => {
    fs.appendFile('modules3.txt', (element + '\n'), e => e ? console.log(e) : null)
  })
  fs.appendFile('modules3.txt', ('\n'), e => e ? console.log(e) : null)
}

fs.writeFile('modules3.txt', '', e => e ? console.log(e) : null)

writeArray('SONGS', songs)
writeArray('BOOKS', books)
writeArray('SHOWS', shows)
writeArray('MOVIES', movies)
