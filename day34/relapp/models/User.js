const { Model, STRING } = require('sequelize')

class User extends Model { }

User.init({
  username: STRING
}, { sequelize: require('../config'), modelName: 'user' })

module.exports = User
