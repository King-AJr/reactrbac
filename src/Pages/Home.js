import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='App'>
      <h1>Home</h1>
      <p>You are logged in</p><br/>
      <Link to="/se-only">Go to the software engineering page</Link><br/>
      <Link to="/marketers-only">Go  to the Marketers page</Link><br/>
      <Link to="/hr-only">Go to the human resource personnel page</Link>
    </div>
  )
}

export default Home

