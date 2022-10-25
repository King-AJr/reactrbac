import React from 'react'
import {Link} from 'react-router-dom'

const Unauthorized = () => {
  return (
    <div  className='App'>
      <h2>Sorry you do not access to this page</h2>
      <Link to="/linkpage">Go to link pages</Link>
    </div>
  )
}

export default Unauthorized
