const { createConnection } = require('mysql2')

const connection = createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'rootroot',
  database: 'todo_db'
})

module.exports = connection
