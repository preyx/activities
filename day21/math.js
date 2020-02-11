const [,, operator, a, b] = process.argv

let result = 0

const x = parseInt(a)
const y = parseInt(b)

switch (operator) {
  case 'add':
    result = x + y
    break
  case 'subtract':
    result = x - y
    break
  case 'multiply':
    result = x * y
    break
  case 'divide':
    result = x / y
    break
  case 'exponent':
    result = x ** y
    break
  case 'remain':
    result = `${Math.floor(x / y)} remainder ${x % y}`
}

console.log(`The result is ${result}`)
