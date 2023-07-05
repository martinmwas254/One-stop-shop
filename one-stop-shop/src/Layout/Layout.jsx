

import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        <Navbar/>

         <div className='mx-auto min-h-[85vh] container bg-gray-100 p-5'>
          <Outlet/>
         </div>
       

        <Footer/>
        </div>
  )
}

export default Layout