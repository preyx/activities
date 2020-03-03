const { Model, STRING } = require('sequelize')

class Post extends Model { }

Post.init({
  text: STRING
}, { sequelize: require('../config'), modelName: 'post' })

module.exports = Post
