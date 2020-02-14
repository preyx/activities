// const adder = (a, b) => {
//   return new Promise((resolve, reject) => {
//     if (typeof a === 'string' || typeof b === 'string') {
//       reject(new Error('NO STRINGS!!!'))
//     } else {
//       resolve(a + b)
//     }
//   })
// }

async function add (a, b) {
  const response = await new Promise((resolve, reject) => {
    if (typeof a === 'string' || typeof b === 'string') {
      reject(new Error('NO STRINGS!!!'))
    } else {
      resolve(a + b)
    }
  })
  return response
}

async function sub (a, b) {
  const response = await new Promise((resolve, reject) => {
    if (typeof a === 'string' || typeof b === 'string') {
      reject(new Error('NO STRINGS!!!'))
    } else {
      resolve(a - b)
    }
  })
  return response
}

add(5, 2)
  .then(sum => console.log(sum))
  .catch(e => console.error(e))
sub(5, 2)
  .then(sum => console.log(sum))
  .catch(e => console.error(e))
