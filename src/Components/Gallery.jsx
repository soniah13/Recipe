import React, { useEffect, useState } from "react"
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Search from "./Search"
import RecipeList from "./RecipeList"



function Gallery ({recipes, setRecipes}) {
    const navigate = useNavigate ();
    const [searchQuery, setSearchQuery] = useState("");

    useEffect (() => {
        console.log('useEffect called')
        fetch ('http://localhost:8000/recipe')
        .then(res => {
            if(!res.ok){
                throw Error('could not fetch');
            }
            return res.json()
        })
        .then(data => {
            setRecipes(data);
            console.log(data)
        })
        .catch((error) => console.error("Error Fetching data", error))
    },[setRecipes])

    function handleClick (id) {
        navigate(`/recipe/${id}`)
    }

    function handleSearch (query) {
        setSearchQuery(query)
    }

    const handleDelete = async(id) => {
        try {
            await axios.delete(`http://localhost:8000/recipe/${id}`);
            setRecipes(recipes => recipes.filter(recipe => recipe.id !== id));
        } catch (error) {
            console.error("Error deleting recipe: ", error)
        }    
    };

   const filteredRecipes = recipes.filter((recipe) => 
        recipe.Name.toLowerCase().includes(searchQuery.toLowerCase())
   );
   const addRecipeClick = () =>  {
    navigate('/addrecipe')
   }


  return (
    <>
    <div className="bg-gradient-to-tr from-green-500 via-green-300 to-lime-500">
        <h2 className='font-semibold text-2xl underline text-center p-5  text-green-900'>What do you want to Cook?</h2>
        <div className="flex justify-center ">
        <Search onSearch={handleSearch}/>
        <button className='font-bold text-2xl text-center bg-green-200 text-black border border-2 border-green-300 rounded-3xl w-96 mx-10 p-2 my-2 hover:bg-green-300 active:scale-[.98] 
                active:duration-75 hover:scale-[1.02] ease-in-out transition-all'
                 type='submit' onClick={addRecipeClick}>Add New Recipe</button>
        </div>
        <RecipeList recipes = {filteredRecipes} handleDelete = {handleDelete} onImageClick = {handleClick} />
        </div>
      </>
  )
}

export default Gallery