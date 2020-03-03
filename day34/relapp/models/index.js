const User = require('./User.js')
const Post = require('./Post.js')

User.hasMany(Post)
Post.belongsTo(User)

module.exports = { User, Post }
