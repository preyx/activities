const prompt = require('inquirer').createPromptModule()

const Player = (name) => ({
  name
})

const Panelist = (name) => ({
  ...Player(name),
  score: 0
})

const questions = ['what is your favorite movie?', 'who is your favorite actor/actress?', 'what is your favorite band?', 'what is your favorite video game?']

const init = async _ => {
  console.log('Welcome to the Match game!')
  let contestant = Player(null)
  let players = 0
  let panelists = []
  let answers = []
  let topScore = 0
  let winners = ''
  try {
    const { name } = await prompt({
      type: 'input',
      name: 'name',
      message: 'Contestant, what is your name?'
    })
    contestant.name = name
  } catch (e) { console.error(e) }
  console.log(`Thank you, ${contestant.name}!`)
  try {
    const { num } = await prompt({
      type: 'number',
      name: 'num',
      message: 'How many panelists?'
    })
    players = num
  } catch (e) { console.error(e) }
  for (let i = 1; i <= players; i++) {
    try {
      const { name } = await prompt({
        type: 'input',
        name: 'name',
        message: `Panelist #${i}, what is your name?`
      })
      panelists.push(Panelist(name))
    } catch (e) { console.error(e) }
  }
  // console.log('contestant', contestant)
  // console.log('players', players)
  // console.log('panelists', panelists)
  for (let l = 0; l < questions.length; l++) {
    answers.length = 0
    try {
      const { ans } = await prompt({
        type: 'password',
        name: 'ans',
        message: `${contestant.name}, ${questions[l]}`,
        mask: ''
      })
      answers.push(ans)
    } catch (e) { console.error(e) }
    for (let i = 1; i <= players; i++) {
      try {
        const { ans } = await prompt({
          type: 'password',
          name: 'ans',
          message: `${panelists[i - 1].name}, your guess?`,
          mask: ''
        })
        answers.push(ans)
      } catch (e) { console.error(e) }
    }
    for (let i = 0; i < players; i++) {
      if (answers[0] === answers[i + 1]) {
        console.log(`${panelists[i].name}, you got it right!`)
        panelists[i].score++
      }
    }
  }
  // console.log('panelists', panelists)
  console.log('FINAL SCORES:')
  for (let i = 0; i < players; i++) {
    console.log(`${panelists[i].name} : ${panelists[i].score} pt`)
  }
  for (let i = 0; i < players; i++) {
    if (panelists[i].score > topScore) topScore = panelists[i].score
  }
  for (let i = 0; i < players; i++) {
    if (panelists[i].score === topScore) winners += panelists[i].name + ', '
  }
  console.log(`The winner(s): ${winners}with a top score of ${topScore} points!`)
}

init()
