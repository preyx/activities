const { Model, STRING, DECIMAL } = require('sequelize')
const sequelize = require('../config')

class Hotdog extends Model { }

Hotdog.init({
  name: {
    type: STRING,
    allowNull: false
  },
  price: {
    type: DECIMAL,
    allowNull: false
  }
}, { sequelize, modelName: 'hotdog' })

module.exports = Hotdog
