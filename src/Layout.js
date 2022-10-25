import {Outlet} from 'react-router-dom'

import React from 'react'

const Layout = () => {
  return (
    <main className='App'>
        <Outlet/>
      </main>
  )
}

export default Layout
