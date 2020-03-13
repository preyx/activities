const prompt = require('inquirer').createPromptModule()
const mongojs = require('mongojs')
const db = mongojs('grocerydb')
const list = db.collection('shoppinglist')

// list.find((err, docs) => {
//   if (err) throw err
//   console.log(docs)
// })

// db.collection('hotdogs').insert({ name: 'Dodger Dog' }, (err, something) => {
//   if (err) throw err
//   console.log(something)
// })

const viewList = async _ => {
  await list.find((err, docs) => {
    if (err) throw err
    docs.forEach(element => {
      console.log(element.name)
    })
  })
}

const addItem = async _ => {
  const { itemName } = await prompt({
    type: 'input',
    name: 'itemName',
    message: 'What item do you want to add?'
  })
  list.insert({ name: itemName })
  console.log('Added!')
}

const delItem = async _ => {
  const { itemName } = await prompt({
    type: 'input',
    name: 'itemName',
    message: 'What item do you want to delete?'
  })
  list.delete({ name: itemName })
  console.log('Removed!')
}

const main = async _ => {
  // while (true) {
    let choice = ''
    try {
      const { menuChoice } = await prompt({
        type: 'list',
        name: 'menuChoice',
        message: 'What do you want to do?',
        choices: ['View Shopping List', 'Add Items', 'Delete Items', 'Exit']
      })
      choice = menuChoice
    } catch (e) { console.error(e) }

    switch (choice) {
      case 'View Shopping List':
        await viewList()
        break
      case 'Add Items':
        await addItem()
        break
      case 'Delete Items':
        await delItem()
        break
      case 'Exit':
        process.exit()
    }
  // }
}

main()
