const fs = require('fs')
const [, , act, val] = process.argv

const twoDec = x => {
  return (Math.floor(x * 100)) / 100
}

const getTotal = _ => {
  fs.readFile('bank.txt', 'utf8', (e, text) => {
    if (e) {
      console.log(e)
    } else {
      const arr = text.split(',')
      let tot = 0
      arr.forEach(element => { tot += parseFloat(element) })
      return twoDec(tot)
    }
  })
}

const total = _ => {
  // console.log('totals')
  const tot = getTotal()
  console.log(`Your total is $${tot}!`)
}

const deposit = x => {
  // console.log('depositing ' + x)
  fs.appendFile('bank.txt', `, ${twoDec(x)}`, e => e ? console.log(e) : null)
  console.log('Operation complete!')
}

const lotto = _ => {
  // console.log('gambling')
  fs.appendFile('bank.txt', ', -.25', e => e ? console.log(e) : null)
  console.log('You spent $0.25 on the lottery!')
  if (Math.random() < 0.05) {
    console.log('Congratulations! You won $5!')
    fs.appendFile('bank.txt', ', 5', e => e ? console.log(e) : null)
  } else {
    console.log('Womp womp! You won nothing!')
  }
}

const lollo = _ => {
  const tot = getTotal()
  console.log(`You bet your life savings of ${tot} on the stock market!`)
  const won = Math.random() > 0.5
  const delta = twoDec((Math.random() ** 6) * 10 * won)
  if (won) {
    fs.appendFile('bank.txt', `, ${delta}`, e => e ? console.log(e) : null)
    console.log(`You have GAINED $${delta}!`)
  } else {
    fs.appendFile('bank.txt', `, -${delta}`, e => e ? console.log(e) : null)
    console.log(`You have LOST $${delta}!`)
  }
}

switch (act) {
  case 'total':
    total()
    break
  case 'deposit':
    deposit(Math.abs(val))
    break
  case 'withdraw':
    deposit(-Math.abs(val))
    break
  case 'lotto':
    lotto()
    break
  case 'lollo':
    lollo()
    break
  default:
    console.log('Invalid command!')
}
