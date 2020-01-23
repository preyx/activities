// const funcOne = x => x()
// const funcTwo = _ => console.log('hi')

// funcOne(funcTwo)
// funcOne(_ => console.log('Hello World!'))
// funcOne(_ => console.log('Goodbye World!'))

let clicks = 0

document.getElementById('countUp').addEventListener('click', _ => {
  document.getElementById('myCount').textContent = `${++clicks}`
  document.getElementById('myCount').style.fontSize = clicks / 10 + 'em'
})

document.getElementById('countDn').addEventListener('click', _ => {
  if (clicks > 0) {
    document.getElementById('myCount').textContent = `${--clicks}`
  }
  document.getElementById('myCount').style.fontSize = clicks / 10 + 'em'
})

document.getElementById('countZero').addEventListener('click', _ => {
  document.getElementById('myCount').textContent = `${(clicks = 0)}`
  document.getElementById('myCount').style.fontSize = '0em'
})
