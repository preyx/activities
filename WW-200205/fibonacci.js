const fib = x => {
  return x === 0 ? 0 : x === 1 ? 1 : (fib(x - 1) + fib(x - 2))
  // switch (x) {
  //   0: return 0
  //   1: return 1
  //   default: return (fibonacci(x-1) + fibonacci(x-2))
  // }
}
