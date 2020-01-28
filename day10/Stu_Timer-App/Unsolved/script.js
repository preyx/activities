const statusSpan = document.querySelector('#status')
const statusToggle = document.querySelector('#status-toggle')
const playButton = document.querySelector('#play')
const pauseButton = document.querySelector('#pause')
const stopButton = document.querySelector('#stop')
const minutesDisplay = document.querySelector('#minutes')
const secondsDisplay = document.querySelector('#seconds')
const workMinutesInput = document.querySelector('#work-minutes')
const restMinutesInput = document.querySelector('#rest-minutes')

let totalSeconds = 1500
let secondsElapsed = 0
let interval = 0
let workTime = 25
let restTime = 5
let isRunning = false

const doubleDigit = x => {
  return (x < 10) ? '0' + x : x
}

const clearTimer = _ => {
  clearInterval(interval)
  isRunning = false
}

const updateDisplay = (resetTime = false) => {
  if (resetTime) {
    clearTimer()
    totalSeconds = 60 * parseInt((statusToggle.checked) ? workTime : restTime)
    secondsElapsed = 0
  }
  minutesDisplay.textContent = doubleDigit(Math.floor((totalSeconds - secondsElapsed) / 60))
  secondsDisplay.textContent = doubleDigit((totalSeconds - secondsElapsed) % 60)
}

const startTimer = _ => {
  // Write code to start the timer here
  if (!isRunning && (secondsElapsed !== totalSeconds)) {
    interval = setInterval(() => {
      isRunning = true
      secondsElapsed++
      updateDisplay()
      if (secondsElapsed === totalSeconds) {
        clearTimer()
        window.alert("Time's up!")
      }
    }, 1000)
  }
}

const pauseTimer = _ => {
  clearTimer()
  updateDisplay()
}

const stopTimer = _ => {
  updateDisplay(true)
}

const updateWork = _ => {
  workTime = workMinutesInput.value
  updateDisplay(true)
}

const updateRest = _ => {
  restTime = restMinutesInput.value
  updateDisplay(true)
}

const toggleStatus = _ => {
  statusSpan.textContent = (statusToggle.checked) ? 'Working' : 'Resting'
  updateDisplay(true)
}

playButton.addEventListener('click', startTimer)
pauseButton.addEventListener('click', pauseTimer)
stopButton.addEventListener('click', stopTimer)
workMinutesInput.addEventListener('change', updateWork)
restMinutesInput.addEventListener('change', updateRest)
statusToggle.addEventListener('change', toggleStatus)
