const makeLottery = _ => {
  let x = ''
  for (let i = 0; i < 9; i++) {
    x += Math.floor(10 * Math.random()).toString()
  }
  return x
}

$('#goBtn').on('click', _ => {
  console.log('ping')
  const newElem = $('<li>')
  newElem.text(makeLottery())
  newElem.addClass('list-group-item')
  $('#result').prepend(newElem)
})
