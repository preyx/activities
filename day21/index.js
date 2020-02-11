// * HELLO WORLD

// console.log('Hello World!')

// * EVEN AND ODD TO CONSOLE

// const isEven = x => {
//   return !(x % 2)
// }

// for (let i = 0; i < 10; i++) {
//   console.log(`${i} is ${isEven(i) ? '' : 'NOT '}even!`)
// }

// * ARGV

// console.log(process.argv)

const [,, ...values] = process.argv
console.log(values)
