const db = require('../config/db.js')

const item = {
  getItems (cb) {
    db.query('SELECT * FROM items', (err, items) => {
      if (err) throw err
      // return items
      cb(items)
    })
  },
  createItem (item, cb) {
    db.query('INSERT INTO items SET ?', item, err => {
      if (err) throw err
      cb()
    })
  },
  updateItem (updates, id, cb) {
    db.query('UPDATE items SET ? WHERE ?', [updates, { itemid: id }], err => {
      if (err) throw err
      cb()
    })
  },
  deleteItem (id, cb) {
    db.query('DELETE FROM items WHERE ?', { itemid: id }, err => {
      if (err) throw err
      cb()
    })
  }
}

module.exports = item
