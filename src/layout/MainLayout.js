import React from 'react'
import Navbar from '../components/NavigationBar'

function MainLayout({layout,children}) {
  return (
    <div class ={layout}>
        <Navbar />
        {children}
    </div>
  )
}

export default MainLayout