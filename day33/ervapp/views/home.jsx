const React = require('react')
const Html = require('./layouts/default')
const Navbar = require('./components/navbar')
const Jumbotron = require('./components/jumbotron')
const Form = require('./components/form')
const List = require('./components/list')

const Home = props => {
  return (
    <Html>
      <Navbar />
      <Jumbotron />
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <Form />
          </div>
          <div className='col-md-6'>
            <List hotdog={props.hotdog} />
          </div>
        </div>
      </div>
    </Html>
  )
}

module.exports = Home
