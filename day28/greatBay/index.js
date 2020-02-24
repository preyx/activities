const mysql = require('mysql2')
const prompt = require('inquirer').createPromptModule()

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'rootroot',
  database: 'activities'
})
connection.query('CREATE TABLE IF NOT EXISTS greatbay( id INT AUTO_INCREMENT PRIMARY KEY, product VARCHAR(100), category VARCHAR(100), bid DECIMAL(10,2))', (err, data) => {
  if (err) { console.log(err) }
  // console.log(data)
})

// connection.query('SELECT * FROM favorite_foods', (err, data) => {
//   if (err) { console.log(err) }
//   console.log(foods)
// })

// connection.query('SELECT * FROM favorite_songs', (err, foods) => {
//   if (err) { console.log(err) }
//   console.log(foods)
// })

// connection.query('SELECT * FROM favorite_movies', (err, foods) => {
//   if (err) { console.log(err) }
//   console.log(foods)
// })

// connection.query('')

const mainMenu = async _ => {
  const ans = await prompt({
    type: 'list',
    name: 'choice',
    message: 'What would you like to do?',
    choices: ['Post', 'Bid', 'Exit']
  })
  // console.log(ans)
  return ans.choice
}

const postItem = async _ => {
  let ans = {}
  do {
    ans = await prompt({
      type: 'input',
      name: 'name',
      message: 'What\'s the name of the item?'
    }, {
      type: 'input',
      name: 'cat',
      message: 'What\'s the category of the item?'
    }, {
      type: 'number',
      name: 'open',
      message: 'What\'s the opening bid?'
    })
  } while (!ans.name || !ans.cat || ans.open < 0)
  connection.query(`INSERT INTO greatbay (product, category, bid) VALUES (${ans.name}, ${ans.cat}, ${ans.open})`, (err, data) => {
    if (err) { console.log(err) }
    console.log(data)
  })
}

const bidItem = async _ => {
  connection.query('SELECT * FROM greatbay ORDER BY category, product', (err, data) => {
    if (err) { console.log(err) }
    console.log(data)
  })

  // do {
  //   ans = await prompt({
  //     type: 'input',
  //     name: 'name',
  //     message: 'What\'s the name of the item?'
  //   }, {
  //     type: 'input',
  //     name: 'cat',
  //     message: 'What\'s the category of the item?'
  //   }, {
  //     type: 'number',
  //     name: 'open',
  //     message: 'What\'s the opening bid?'
  //   })
  // } while (!ans.name || !ans.cat || ans.open < 0)
  // connection.query(`INSERT INTO greatbay (product, category, bid) VALUES (${ans.name}, ${ans.cat}, ${ans.open})`, (err, data) => {
  //   if (err) { console.log(err) }
  //   console.log(data)
  // })
}

const main = async _ => {
  let mode = await mainMenu()
  console.log(mode)
  while (mode !== 'Exit') {
    if (mode === 'Post') {
      await postItem()
    } else if (mode === 'Bid') {
      await bidItem()
    }
    mode = await mainMenu()
  }
  console.log('Exiting!')
  process.exit()
}

main()
