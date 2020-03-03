const Sequelize = require('sequelize')

module.exports = new Sequelize(process.env.NODE_ENV === 'production' ? process.env.JAWSDB_URL : process.env.LOCAL_URL)
