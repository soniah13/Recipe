import React from 'react'
import Gallery from './Components/Gallery'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RecipeDetails from './Components/RecipeDetails'
import Login from './Components/Login'
import Registration from './Components/Registration'


function App() {
  

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element= {<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={ <Login/>}/>
      <Route path='/register' element={<Registration/>}/>
      <Route path='/gallery'element={<Gallery/>}/>
      <Route path='/recipe/:id' element ={<RecipeDetails/>} />
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
