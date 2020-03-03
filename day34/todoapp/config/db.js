const { createConnection } = require('mysql2')

const connection = createConnection(process.env.NODE_ENV === 'production' ? process.env.JAWSDB_URL : process.env.LOCAL_URL)

module.exports = connection
