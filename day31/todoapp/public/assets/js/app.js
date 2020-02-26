// pulls the axios cdn and localStorage off of the window object (not needed to do but a good practice)
const { axios, localStorage } = window

// declaring global variables for tracking the values of userid and username throughout all logic (grabbing their initial value from the value in local storage)
let uid = localStorage.getItem('uid')
let uname = localStorage.getItem('uname')

// function to display all items on the to-do list
const renderList = list => {
  // clear out the todo list so there is nothing in it before we render
  document.getElementById('list').innerHTML = ''
  // loop over the list
  list.forEach(({ item, isDone, itemid }) => {
    // create an <li> tag for each item
    const itemElem = document.createElement('li')
    // set the id to the item id
    itemElem.id = itemid
    // class name used to create formatting via bootstrap, as well as either color the item green or not green based on the value of isDone
    itemElem.className = `items list-group-item ${isDone ? 'list-group-item-success' : ''}
    d-flex justify-content-between align-items-center`
    // data-isDone property to track on the <li> the state of whether the list item is complete or not
    itemElem.dataset.isDone = isDone
    // display of the actual item text, along with a red badge with an x for deleting (also tracking in data-id the id of the item for deletion later)
    itemElem.innerHTML = `${item} <span data-id=${itemid} class="delete badge badge-danger badge-pill">x</span>`
    // appending the new <li> with all the item info onto the list on the page
    document.getElementById('list').append(itemElem)
  })
}

// function to update the isDone property of the item
const updateItem = ({ id, dataset: { isDone } }) => {
  // axios PUT request, grabbing the id off the <li> tag for the item, as well as setting isDone to be the opposite value of the data-isDone property on the <li>
  axios.put(`/api/items/${id}`, { isDone: !parseInt(isDone) })
    // once finished, a GET request for the user and all their items is run
    .then(() => axios.get(`/api/users/${uname}`))
    // the items found are passed to renderList to re-render all the items with the new changes
    .then(({ data: list }) => renderList(list))
    // handle our errors
    .catch(e => console.error(e))
}

// function to delete an item from our list table
const deleteItem = ({ dataset: { id } }) => {
  // axios DELETE request, which takes the data-id property off of the x badge on the <li> to identify the item to be deleted
  axios.delete(`/api/items/${id}`)
    // once finished, a GET request for the user and all their items is run
    .then(() => axios.get(`/api/users/${uname}`))
    // the items found are passed to renderList to re-render all the items with the new changes
    .then(({ data: list }) => renderList(list))
    // handle our errors
    .catch(e => console.error(e))
}

// function to create a new item for our to-do list
const createItem = () => {
  // axios POST request to create a new item, grabbing the value of the item <input> and the checked boolean for the checkbox to create the new item (including the global uid variable, which at the time of execution will have been assigned value by either the createUser or signIn function)
  axios.post('/api/items', {
    item: document.getElementById('item').value,
    isDone: document.getElementById('isDone').checked,
    userid: uid
  })
    // once finished, a GET request for the user and all their items is run
    .then(() => axios.get(`/api/users/${uname}`))
    // the items found are passed to renderList to re-render all the items with the new changes
    .then(({ data: list }) => renderList(list))
    // handle our errors
    .catch(e => console.error(e))

  // these clear the item text input and set the checkbox back to being unchecked
  document.getElementById('item').value = ''
  document.getElementById('isDone').checked = false
}

// function to create a new user
const createUser = () => {
  // Ajax request hitting the POST route defined in our userRoutes.js
  axios.post('/api/users', {
    // grabbing the value of the username text input to pass in the request body
    username: document.getElementById('username').value
  })
    // once finished, another ajax request is triggered to retrieve the user's information (necessary because we need the new user's userid)
    .then(() => axios.get(`/api/users/${document.getElementById('username').value}`))
    // destructuring the userid and username values off of the axios payload
    .then(({ data: [{ userid, username }] }) => {
      // assigning the retrieved value to our global variables for sharing the info between many functions, as well as passing the value into localStorage
      uid = userid
      uname = username
      localStorage.setItem('uid', userid)
      localStorage.setItem('uname', username)

      // little display message to signify to the user that they have signed in
      document.getElementById('message').textContent = `Hello ${username}! Welcome!`
      // disable all sign in and create user form items and enable the sign out button
      document.getElementById('username').setAttribute('disabled', true)
      document.getElementById('signIn').setAttribute('disabled', true)
      document.getElementById('createUser').setAttribute('disabled', true)
      document.getElementById('signOut').removeAttribute('disabled')
    })
    // handle your errors
    .catch(e => console.error(e))
}

// function to sign in to a user account
const signIn = (username) => {
  // AJAX reqest hitting the GET route written in our userRoutes.js (returns the user information along with all items found by the user)
  axios.get(`/api/users/${username || document.getElementById('username').value}`)
    // destructuring the list of items found off the payload
    .then(({ data: list }) => {
      // assigning the retrieved value to our global variables for sharing the info between many functions, as well as passing the value into localStorage
      uid = list[0].userid
      uname = list[0].username
      localStorage.setItem('uid', list[0].userid)
      localStorage.setItem('uname', list[0].username)

      // taking the list of items and passing it to the renderList function to be rendered
      renderList(list)

      // little display message to signify to the user that they have signed in
      document.getElementById('message').textContent = `Hello ${list[0].username}! Welcome!`
      // disable all sign in and create user form items and enable the sign out button
      document.getElementById('username').setAttribute('disabled', true)
      document.getElementById('signIn').setAttribute('disabled', true)
      document.getElementById('createUser').setAttribute('disabled', true)
      document.getElementById('signOut').removeAttribute('disabled')
    })
    .catch(e => console.error(e))
}

// event listener for when the <li> is clicked with the intention of updating the current item and running the updateItem function, passing it the current element
document.addEventListener('click', event => event.target.classList.contains('items') ? updateItem(event.target) : null)

// event listener for when the red x badge is clicked with the intention of deleting the current item and runs the deleteItem function, passing it the current element
document.addEventListener('click', event => event.target.classList.contains('delete') ? deleteItem(event.target) : null)

// event listener for when the big red 'Sign Out' button is pressed with the intention of signing the user out
document.getElementById('signOut').addEventListener('click', event => {
  // Stop the form from refreshing the page
  event.preventDefault()

  // clear localStorage
  localStorage.clear()

  // little display message to signify to the user that they have not signed in
  document.getElementById('message').textContent = 'This is a simple to-do list app for tracking items you need to complete. Create an account or Sign in to get started!'
  // disable all sign in and create user form items and enable the sign out button
  document.getElementById('username').removeAttribute('disabled')
  document.getElementById('signIn').removeAttribute('disabled')
  document.getElementById('createUser').removeAttribute('disabled')
  document.getElementById('signOut').setAttribute('disabled', true)

  // clear out the list display
  document.getElementById('list').innerHTML = '<li class="list-group-item">No items to display. Not signed in yet.</li>'
})

// event listener for when the big blue 'Sign In' button is pressed with the intention of signing in to an existing user account
document.getElementById('signIn').addEventListener('click', event => {
  // Stop the form from refreshing the page
  event.preventDefault()
  // Runs the signIn function
  signIn()
})

// event listener for when the big green 'Create Account' button is pressed with the intention of creating a new user in the database
document.getElementById('createUser').addEventListener('click', event => {
  // Stop the form from refreshing the page
  event.preventDefault()
  // Runs the createUser function
  createUser()
})

// event listener for when the 'Add Item' button is clicked with the intention of creating a new item
document.getElementById('createItem').addEventListener('click', event => {
  // Stop the form from refreshing the page
  event.preventDefault()
  // Runs the createItem function
  createItem()
})

if (localStorage.getItem('uname')) {
  signIn(localStorage.getItem('uname'))
}
