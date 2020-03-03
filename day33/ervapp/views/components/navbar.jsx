const React = require('react')

const Navbar = props => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <a className='navbar-brand' href='#'>Navbar</a>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon' />
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <a className='nav-link' href='#'>Home <span className='sr-only'>(current)</span></a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>Link</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>Link</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>Link</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

module.exports = Navbar
