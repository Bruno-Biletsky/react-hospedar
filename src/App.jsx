import { useState } from 'react'
import Nav from './components/Nav/Nav'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/footer'



function App() {
 
  return (
    <>
     <Nav/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default App
