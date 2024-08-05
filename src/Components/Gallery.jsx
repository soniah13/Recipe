import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Search from "./Search"
import RecipeList from "./RecipeList"


function Gallery() {
    const [recipes, setRecipes] = useState([])
    const navigate = useNavigate ();
    const [searchQuery, setSearchQuery] = useState("")

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
    },[])

    function handleClick (id) {
        navigate(`/recipe/${id}`)
    }

    function handleSearch (query) {
        setSearchQuery(query)
    }

    function handleDelete (id) {
        setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.id !== id));
    }

   const filteredRecipes = recipes.filter((recipe) => 
        recipe.Name.toLowerCase().includes(searchQuery.toLowerCase())
   );


  return (
    <>
    <div className="bg-gradient-to-tr from-green-500 via-green-300 to-lime-500">
        <h2 className='font-semibold text-2xl underline text-center p-5  text-green-900'>What do you want to Cook?</h2>
        <Search onSearch={handleSearch}/>
        <RecipeList recipe = {filteredRecipes} onDelete = {handleDelete} onImageClick = {handleClick} />
        </div>
      </>
  )
}

export default Gallery