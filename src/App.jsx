import React from 'react'
import Gallery from './Components/Gallery'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element= {<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/gallery'element={<Gallery/>}/>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
