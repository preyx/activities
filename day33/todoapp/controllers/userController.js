const db = require('../config/db.js')

const user = {
  getUsers (cb) {
    db.query('SELECT * FROM users', (err, users) => {
      if (err) { console.log(err) }
      cb(users)
    })
  },
  getUser (username, cb) {
    db.query(`
    SELECT users.userid, users.username, items.item, items.isDone, items.itemid FROM users
    LEFT JOIN items
    ON users.userid = items.userid
    WHERE ?
  `, { username: username }, (err, data) => {
      if (err) { console.log(err) }
      cb(data)
    })
  },
  createUser (user, cb) {
    db.query('INSERT INTO users SET ?', user, err => {
      if (err) { console.log(err) }
      cb()
    })
  },
  updateUser (updates, id, cb) {
    db.query('UPDATE users SET ? WHERE ?', [updates, { userid: id }], err => {
      if (err) { console.log(err) }
      cb()
    })
  },
  deleteUser (id, cb) {
    db.query('DELETE FROM users WHERE ?', { userid: id }, err => {
      if (err) { console.log(err) }
      cb()
    })
  }
}

module.exports = user
