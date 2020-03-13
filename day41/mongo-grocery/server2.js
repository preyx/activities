const prompt = require('inquirer').createPromptModule()
const mongojs = require('mongojs')
const db = mongojs('grocerydb')
const list = db.collection('shoppinglist')

// function to get all groceries
const getGroceries = () => {
  // Write code to view all groceries in the database collection here...
  list.find((err, docs) => {
    if (err) throw err
    docs.forEach(element => {
      console.log(element.name)
    })
  })
  // sends them back to the main menu when ready
  prompt({
    type: 'input',
    name: 'doesnotmatter',
    message: 'Hit ENTER to return to main menu'
  })
    .then(() => mainMenu())
}

// function to add groceries
const addGroceries = () => {
  prompt({
    type: 'input',
    name: 'grocery',
    message: 'What would you like to add?'
  })
    .then(({ grocery }) => {
      // write code to add grocery to database collection here...

      // sends them back to add another grocery if desired
      prompt({
        type: 'confirm',
        name: 'choice',
        message: 'Would you like to add another?'
      })
        .then(({ choice }) => choice ? addGroceries() : mainMenu())
    })
}

// function to remove groceries
const removeGroceries = () => {
  prompt({
    type: 'input',
    name: 'grocery',
    message: 'Which grocery would you like to remove?'
  })
    .then(({ grocery }) => {
      // Write code to remove a grocery from the database collection here...

      // sends them back to remove another grocery if desired
      prompt({
        type: 'confirm',
        name: 'choice',
        message: 'Would you like to remove another?'
      })
        .then(({ choice }) => choice ? removeGroceries() : mainMenu())
    })
}

// main menu function
const mainMenu = () =>
  prompt({
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: ['View Grocery List', 'Add To Grocery List', 'Remove From Grocery List']
  })
    .then(({ action }) => {
      // handle different choices
      switch (action) {
        case 'View Grocery List':
          getGroceries()
          break
        case 'Add To Grocery List':
          addGroceries()
          break
        case 'Remove From Grocery List':
          removeGroceries()
          break
      }
    })

mainMenu()