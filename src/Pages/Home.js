import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="App">
      <h1>Welcome Home, what would you like to do</h1>
      <Link to='/register'>Register</Link><br/>
      <Link to='/signin'>Signin</Link><br/>
    </div>
  )
}

export default Home

