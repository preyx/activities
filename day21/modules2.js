const add = require('./add.js')
const subtract = require('./subtract.js')
const multiply = require('./multiply.js')
const divide = require('./divide.js')

const [, , operator, a, b] = process.argv

let result = 0

const x = parseInt(a)
const y = parseInt(b)

switch (operator) {
  case 'add':
    result = add(x, y)
    break
  case 'subtract':
    result = subtract(x, y)
    break
  case 'multiply':
    result = multiply(x, y)
    break
  case 'divide':
    result = divide(x, y)
}

console.log(`The result is ${result}`)
