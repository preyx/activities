const db = require('../config/db')

const user = {
  getUsers (cb) {
    db.query('SELECT * FROM users', (err, data) => {
      if (err) throw err
      cb(data)
    })
  },
  getUser (user, cb) {
    db.query('SELECT users.userid, users.username, items.item, items.isDone, items.itemid FROM users LEFT JOIN items ON users.userid = items.userid WHERE ?', { username: user }, (err, data) => {
      if (err) console.log(err)
      cb(data)
    })
  },
  createUser (user, cb) {
    db.query('INSERT INTO users SET ?', user, err => {
      if (err) throw err
      cb()
    })
  },
  updateUser (updates, id, cb) {
    db.query('UPDATE items users ? WHERE ?', updates, { userid: id }, err => {
      if (err) throw err
      cb()
    })
  },
  deleteUser (id, cb) {
    db.query('DELETE FROM users WHERE ?', { userid: id }, err => {
      if (err) throw err
      cb()
    })
  }
}

module.exports = user
