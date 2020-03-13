
module.exports = require('mongoose').connect('mongodb://localhost/tododb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
