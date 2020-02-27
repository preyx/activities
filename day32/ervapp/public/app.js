let clicks = 0

document.getElementById('countUp').addEventListener('click', _ => {
  document.getElementById('myCount').textContent = `${++clicks}`
  // document.getElementById('myCount').style.fontSize = clicks / 10 + 'em'
})

document.getElementById('countDn').addEventListener('click', _ => {
  if (clicks > 0) {
    document.getElementById('myCount').textContent = `${--clicks}`
  }
  // document.getElementById('myCount').style.fontSize = clicks / 10 + 'em'
})

document.getElementById('countZero').addEventListener('click', _ => {
  document.getElementById('myCount').textContent = `${(clicks = 0)}`
  // document.getElementById('myCount').style.fontSize = '0em'
})

document.getElementById('addButton').addEventListener('click', _ => {
  itemText = document.getElementById('itemText').value.trim()
  if (itemText) {
    listItems.push(itemText)
  }
})
