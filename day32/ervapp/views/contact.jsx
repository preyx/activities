const React = require('react')

const Html = require('./layouts/default')

const Contact = () => {
  return (
    <Html>
      <div className='container'>
        <h1>Contact Me:</h1>
        <form>
          <div className='form-group'>
            <label htmlFor='fname1'>First Name</label>
            <input type='text' className='form-control' id='fname1' />
          </div>
          <div className='form-group'>
            <label htmlFor='lname1'>Last Name</label>
            <input type='text' className='form-control' id='lname1' />
          </div>
          <div className='form-group'>
            <label htmlFor='email1'>Email address</label>
            <input type='email' className='form-control' id='email1' />
          </div>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </Html>
  )
}

module.exports = Contact
