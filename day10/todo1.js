const items = JSON.parse(localStorage.getItem('items')) || []

const renderItems = _ => {
  document.getElementById('items').innerHTML = ''
  for (let i = 0; i < items.length; i++) {
    const itemElem = document.createElement('li')
    itemElem.textContent = items[i].text
    itemElem.className = items[i].isDone ? 'complete' : 'incomplete'
    itemElem.innerHTML = `
${items[i].text}
<button class="markDone" value="${i}">✓</button>
<button class="removeItem" value="${i}">✗</button>
`
    document.getElementById('items').append(itemElem)
  }
  localStorage.setItem('items', JSON.stringify(items))
}

const markDone = index => {
  items[index].isDone = !items[index].isDone
  renderItems()
}

const removeItem = index => {
  items.splice(index, 1)
  renderItems()
}

document.getElementById('addItem').addEventListener('click', event => {
  event.preventDefault()
  items.push({
    text: document.getElementById('item').value,
    isDone: false
  })
  renderItems()
  document.getElementById('item').value = ''
})

// document.getElementById('markDone').addEventListener('click', _ => {console.log('ping')})
document.addEventListener('click', event => {
  // console.log(event.target)
  if (event.target.className === 'markDone') {
    markDone(event.target.value)
  } else if (event.target.className === 'removeItem') {
    removeItem(event.target.value)
  }
})

// localStorage.setItem('arr', JSON.stringify([1, 23, 456]))
// console.log(JSON.parse(localStorage.getItem('arr')))

renderItems()
