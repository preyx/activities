const chalk = require('chalk')
const inquirer = require('inquirer')

// console.log(chalk.blue('Hello World!'))

// inquirer.prompt([{
//   type: 'input',
//   name: 'text',
//   message: 'How are you today?'
// }])
// .then(response => console.log(response))

const add = require('./add.js')
const subtract = require('./subtract.js')
const multiply = require('./multiply.js')
const divide = require('./divide.js')

inquirer.prompt([{
  type: 'list',
  name: 'operator',
  message: chalk.bgRed('Which operation?'),
  choices: ['add', 'subtract', 'multiply', 'divide']
},
{
  type: 'number',
  name: 'numA',
  message: chalk.bgBlueBright('First number?')
},
{
  type: 'number',
  name: 'numB',
  message: chalk.bgGreenBright('Second number?')
}])
  .then(response => {
    // console.log(response)
    let result = 0

    const x = parseInt(response.numA)
    const y = parseInt(response.numB)

    switch (response.operator) {
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

    console.log(chalk.inverse(`The result is ${result}`))
  })
