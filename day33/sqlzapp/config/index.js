const Sequelize = require('sequelize')

// sqltype://username:password@server:port/dbname
const sequelize = new Sequelize('mysql://root:rootroot@localhost:3306/something_db')

module.exports = sequelize
