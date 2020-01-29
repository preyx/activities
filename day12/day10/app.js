const items = JSON.parse(localStorage.getItem('items')) || []

const renderItems = _ => {
  $('#items').html('')
  for (let i = 0; i < items.length; i++) {
    const itemElem = $('<li>')
    itemElem.addClass(items[i].isDone ? 'complete' : 'incomplete')
    itemElem.html(`
<button class="markDone uk-button-small uk-button-primary" value="${i}">✓</button>
<button class="removeItem uk-button-small uk-button-danger" value="${i}">X</button>
${items[i].text}
`)
    $('#items').append(itemElem)
  }
}

const markDone = index => {
  items[index].isDone = !items[index].isDone
  localStorage.setItem('items', JSON.stringify(items))
  renderItems()
}

const removeItem = index => {
  items.splice(index, 1)
  localStorage.setItem('items', JSON.stringify(items))
  renderItems()
}

$('#addItem').click(event => {
  event.preventDefault()
  items.push({
    text: $('#item').val(),
    isDone: false
  })
  localStorage.setItem('items', JSON.stringify(items))
  renderItems()
  $('#item').val('')
})

$(document).click(event => {
  event.preventDefault()
  if (event.target.classList[0] === 'markDone') {
    markDone(event.target.value)
  } else if (event.target.classList[0] === 'removeItem') {
    removeItem(event.target.value)
  }
})

renderItems()
