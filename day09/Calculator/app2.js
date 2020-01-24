const clearCalc = (a = '') => {
  numA = a
  numB = ''
  operator = ''
  result = 0
  complete = false
  document.getElementById('first-number').textContent = a
  document.getElementById('second-number').textContent = ''
  document.getElementById('operator').textContent = ''
  document.getElementById('result').textContent = ''
}

let numA = ''
let numB = ''
let operator = ''
let result = 0
let complete = false

document.addEventListener('click', event => {
  const trueTarget = event.target.tagName === 'SPAN' ? event.target.parentNode : event.target
  switch (trueTarget.classList[2]) {
    case 'number':
      if (complete) {
        clearCalc(trueTarget.value)
      } else if (!operator) {
        numA = numA.concat(trueTarget.value)
        document.getElementById('first-number').textContent = numA
      } else {
        numB = numB.concat(trueTarget.value)
        document.getElementById('second-number').textContent = numB
      }
      break
    case 'operator':
      if (complete && isFinite(result)) {
        clearCalc(result.toString())
      } else if (!isFinite(result) || !numA) {
        clearCalc('0')
      }
      operator = trueTarget.value
      switch (operator) {
        case 'plus':
          document.getElementById('operator').textContent = '+'
          break
        case 'minus':
          document.getElementById('operator').textContent = '-'
          break
        case 'times':
          document.getElementById('operator').textContent = '*'
          break
        case 'divide':
          document.getElementById('operator').textContent = '/'
          break
        case 'power':
          document.getElementById('operator').textContent = '^'
      }
      break
    case 'equal':
      if (!numA || !operator) {
        result = 'Error!'
      } else if (!numB) {
        numB = '0'
        document.getElementById('second-number').textContent = numB
      }
      switch (operator) {
        case 'plus':
          result = parseInt(numA) + parseInt(numB)
          break
        case 'minus':
          result = parseInt(numA) - parseInt(numB)
          break
        case 'times':
          result = parseInt(numA) * parseInt(numB)
          break
        case 'divide':
          result = parseInt(numB) === 0 ? 'Black hole initiated. Please stand by...' : parseInt(numA) / parseInt(numB)
          break
        case 'power':
          result = Math.pow(parseInt(numA), parseInt(numB))
      }
      document.getElementById('result').textContent = result
      complete = true
      break
    case 'clear':
      clearCalc()
  }
})
