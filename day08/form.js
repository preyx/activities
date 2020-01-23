// const formElem = document.createElement('form')

// formElem.innerHTML = `
// <label>email</label>
// <input type="text">
// <label>password<label>
// <input type="text">
// <butons>Submit</button>
// `

const users = [
  {
    username: 'johndoe',
    password: '1234'
  },
  {
    username: 'janedoe',
    password: '4321'
  },
  {
    username: 'jackdoe',
    password: '1423'
  },
  {
    username: 'jerrydoe',
    password: '2314'
  }
]

// for (let i = 0; i < users.length; i++) {
//   document.getElementById('myDiv').innerHTML += `<p>Username: ${users[i].username}<br />Password: ${users[i].password}</p>`
// }

for (let i = 0; i < users.length; i++) {
  console.log(users[i])
  let userDiv = document.createElement('div')
  userDiv.className = 'card'
  userDiv.innerHTML = `<div class="card-body">Username: ${users[i].username}<br />Password: ${users[i].password}</div>`
  document.getElementById('myDiv').append(userDiv)
}
