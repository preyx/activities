const mongojs = require('mongojs')
const db = mongojs('hotdogdb')
db.collection('hotdogs').find((err, docs) => {
  if (err) throw err
  console.log(docs)
})

db.collection('hotdogs').insert({ name: 'Dodger Dog' }, (err, something) => {
  if (err) throw err
  console.log(something)
})
