const React = require('react')

const Form = props => {
  return (
    <ul className='list-group'>
      <li className='list-group-item'>Cras justo odio</li>
      <li className='list-group-item'>Dapibus ac facilisis in</li>
      <li className='list-group-item'>Morbi leo risus</li>
      <li className='list-group-item'>Porta ac consectetur ac</li>
      <li className='list-group-item'>{props.hotdog}</li>
    </ul>
  )
}

module.exports = Form
