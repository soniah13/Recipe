import React, { useState } from 'react'
import Gallery from './Components/Gallery'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RecipeDetails from './Components/RecipeDetails'
import Login from './Components/Login'
import Registration from './Components/Registration'
import AddRecipe from './Components/AddRecipe'


function App() {
  const [recipes, setRecipes] = useState([]);
  

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element= {<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={ <Login/>}/>
      <Route path='/register' element={<Registration/>}/>
      <Route path='/gallery'element={<Gallery recipes={recipes} setRecipes={setRecipes}/>}/>
      <Route path='/addRecipe'element={<AddRecipe recipes={recipes} setRecipes={setRecipes}/>}/>
      <Route path='/recipe/:id' element ={<RecipeDetails/>} />
      
    </Routes>
    </BrowserRouter>
  )
}

export default App