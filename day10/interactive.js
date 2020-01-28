let clicks = localStorage.getItem('clicks') || 0
document.getElementById('myCount').textContent = `${clicks}`
document.getElementById('myCount').style.fontSize = clicks / 10 + 'em'

document.getElementById('countUp').addEventListener('click', _ => {
  document.getElementById('myCount').textContent = `${++clicks}`
  document.getElementById('myCount').style.fontSize = clicks / 10 + 'em'
  localStorage.setItem('clicks', clicks.toString())
})

document.getElementById('countDn').addEventListener('click', _ => {
  if (clicks > 0) {
    document.getElementById('myCount').textContent = `${--clicks}`
  }
  document.getElementById('myCount').style.fontSize = clicks / 10 + 'em'
  localStorage.setItem('clicks', clicks.toString())
})

document.getElementById('countZero').addEventListener('click', _ => {
  document.getElementById('myCount').textContent = `${(clicks = 0)}`
  document.getElementById('myCount').style.fontSize = '0em'
  localStorage.setItem('clicks', clicks.toString())
})
