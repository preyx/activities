const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'rootroot',
  database: 'favorites_db'
})

connection.query('SELECT * FROM favorite_foods', (err, foods) => {
  if (err) { console.log(err) }
  console.log(foods)
})

connection.query('SELECT * FROM favorite_songs', (err, foods) => {
  if (err) { console.log(err) }
  console.log(foods)
})

connection.query('SELECT * FROM favorite_movies', (err, foods) => {
  if (err) { console.log(err) }
  console.log(foods)
})

connection.query('')
