const React = require('react')

const Html = require('./layouts/default')

const Count = () => {
  return (
    <Html>
      <div className='text-center'>
        <h1 id='myCount'>0</h1>
        <button id='countDn' className='btn btn-primary'>-</button> <button id='countZero' className='btn btn-outline-danger'>0</button> <button id='countUp' className='btn btn-primary'>+</button>
      </div>
    </Html>
  )
}

module.exports = Count
