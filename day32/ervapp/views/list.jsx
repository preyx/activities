const React = require('react')

const Html = require('./layouts/default')

const List = (props) => {
  return (
    <Html>
      <div className='jumbotron jumbotron-fluid'>
        <div className='container'>
          <h1 className='display-4'>List!</h1>
        </div>
      </div>
      <div className='container'>
        <div className='input-group mb-3'>
          <input type='text' className='form-control' id='itemText' placeholder='Item to Add' />
          <div className='input-group-append'>
            <button className='btn btn-outline-secondary' type='button' id='addButton'>Add</button>
          </div>
        </div>
        <div className='card'>
          <ul className='list-group list-group-flush' id='listBox'>
            {props.list.map(item => <li className='list-group-item d-flex justify-content-between align-items-center' key={item.index}>{item}<span className='badge badge-danger badge-pill'><i data-feather='trash-2' /></span></li>)}
            {/* <li className='list-group-item d-flex justify-content-between align-items-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, aliquid?<span className='badge badge-danger badge-pill' id='0'><i data-feather='trash-2' /></span></li> */}
          </ul>
        </div>
      </div>
      <script src='https://unpkg.com/feather-icons' />
      <script>
        feather.replace()
      </script>
    </Html>
  )
}

module.exports = List
