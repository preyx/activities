// pulls the axios cdn off of the window object (not needed to do but a good practice)
const { axios } = window

// function to display all items on the to-do list
const renderList = list => {
  // clear out the todo list so there is nothing in it before we render
  document.getElementById('list').innerHTML = ''
  // loop over the list
  list.forEach(({ item, isDone, id }) => {
    // create an <li> tag for each item
    const itemElem = document.createElement('li')
    // set the id to the item id
    itemElem.id = id
    // class name used to create formatting via bootstrap, as well as either color the item green or not green based on the value of isDone
    itemElem.className = `items list-group-item ${isDone ? 'list-group-item-success' : ''}
    d-flex justify-content-between align-items-center`
    // data-isDone property to track on the <li> the state of whether the list item is complete or not
    itemElem.dataset.isDone = isDone
    // display of the actual item text, along with a red badge with an x for deleting (also tracking in data-id the id of the item for deletion later)
    itemElem.innerHTML = `${item} <span data-id=${id} class="delete badge badge-danger badge-pill">x</span>`
    // appending the new <li> with all the item info onto the list on the page
    document.getElementById('list').append(itemElem)
  })
}

// function to update the isDone property of the item
const updateItem = ({ id, dataset: { isDone } }) => {
  // axios PUT request, grabbing the id off the <li> tag for the item, as well as setting isDone to be the opposite value of the data-isDone property on the <li>
  axios.put(`/api/items/${id}`, { isDone: !parseInt(isDone) })
    // once finished, a GET request for all items is run
    .then(() => axios.get('/api/items'))
    // the items found are passed to renderList to re-render all the items with the new changes
    .then(({ data: list }) => renderList(list))
    // handle our errors
    .catch(e => console.error(e))
}

// function to delete an item from our list table
const deleteItem = ({ dataset: { id } }) => {
  // axios DELETE request, which takes the data-id property off of the x badge on the <li> to identify the item to be deleted
  axios.delete(`/api/items/${id}`)
    // once finished, a GET request for all items is run
    .then(() => axios.get('/api/items'))
    // the items found are passed to renderList to re-render all the items with the new changes
    .then(({ data: list }) => renderList(list))
    // handle our errors
    .catch(e => console.error(e))
}

// function to create a new item for our to-do list
const createItem = () => {
  // axios POST request to create a new item, grabbing the value of the item <input> and the checked boolean for the checkbox to create the new item
  axios.post('/api/items', {
    item: document.getElementById('item').value,
    isDone: document.getElementById('isDone').checked
  })
    // once finished, a GET request for all items is run
    .then(() => axios.get('/api/items'))
    // the items found are passed to renderList to re-render all the items with the new changes
    .then(({ data: list }) => renderList(list))
    // handle our errors
    .catch(e => console.error(e))

  // these clear the item text input and set the checkbox back to being unchecked
  document.getElementById('item').value = ''
  document.getElementById('isDone').checked = false
}

// event listener for when the <li> is clicked with the intention of updating the current item and running the updateItem function, passing it the current element
document.addEventListener('click', event => event.target.classList.contains('items') ? updateItem(event.target) : null)

// event listener for when the red x badge is clicked with the intention of deleting the current item and runs the deleteItem function, passing it the current element
document.addEventListener('click', event => event.target.classList.contains('delete') ? deleteItem(event.target) : null)

// event listener for when the 'Add Item' button is clicked with the intention of creating a new item
document.getElementById('createItem').addEventListener('click', event => {
  // Stop the form from refreshing the page
  event.preventDefault()
  // Runs the createItem function
  createItem()
})

// Initial GET request to retrieve all items on page load
axios.get('/api/items')
// the items found are passed to renderList to re-render all the items with the new changes
  .then(({ data: list }) => renderList(list))
  .catch(e => console.error(e))
