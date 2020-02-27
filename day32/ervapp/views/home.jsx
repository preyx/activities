const React = require('react')

const Html = require('./layouts/default')

const Home = () => {
  return (
    <Html>
      <h1>Hello World!</h1>
      <button className='btn btn-primary'>Click Me</button>
    </Html>
  )
}

module.exports = Home
