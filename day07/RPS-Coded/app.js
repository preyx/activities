let win = 0
let loss = 0
let tie = 0
let player = ''
let cpu = ''
const choices = ['Rock', 'Paper', 'Scissors']

for (let i = 0; i < 10; i++) {
  player = ''
  while (player === '') {
    player = window.prompt(`Round ${i + 1}, fight!\nChoose (R)ock, (P)aper, (S)cissors?`)
    switch (player[0]) {
      case 'R':
      case 'r':
        player = 0
        break
      case 'P':
      case 'p':
        player = 1
        break
      case 'S':
      case 's':
        player = 2
        break
      default:
        window.alert('You chose poorly!\nTry again!')
        player = ''
    }
  }
  cpu = Math.floor(3 * Math.random())
  if (player === cpu) {
    tie++
    window.alert(
      `You chose ${choices[player]}, CPU chose ${choices[cpu]}.\nYou tied!`
    )
  } else if ((player === 0 && cpu === 2) || (player === 1 && cpu === 0) || (player === 2 && cpu === 1)) {
    win++
    window.alert(
      `You chose ${choices[player]}, CPU chose ${choices[cpu]}.\nYou won!`
    )
  } else {
    loss++
    window.alert(
      `You chose ${choices[player]}, CPU chose ${choices[cpu]}.\nYou lost!`
    )
  }
}
window.alert(`Game over!
Win: ${win}
Loss: ${loss}
Tie: ${tie}`)
