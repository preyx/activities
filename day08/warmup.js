const isEven = function (x) {
  return !(x % 2)
}

// SAME AS
// const isEven = x => {
//   return !(x % 2)
// }

// SAME AS
// const isEven = x => !(x % 2)

for (let i = -9; i < 10; i++) {
  console.log(`${i} is even: ${isEven(i)}`)
}
