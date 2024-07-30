import React, { useEffect, useState } from "react"


function Gallery() {
    const [recipes, setRecipes] = useState([])

    useEffect (() => {
        console.log('useEffect called')
        fetch ('http://localhost:8000/recipes')
        .then(res => {
            if(!res.ok){
                throw Error('could not fetch');
            }
            return res.json()
        })
        .then(data => {
            setRecipes(data);
            console.log(data)
        });
    },[])

  return (
    <div>
        <h2 className='font-semibold text-2xl underline text-center p-5 text-green-900'>What do you want to Cook?</h2>
        <div className='grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-4 gap-6 grid-rows-5 bg-green-100'>
        {recipes.map((recipe) => (
            <div className="bg-green-200 gap-2 rounded-md shadow-lg" key={recipe.id} >
                <h2 className="font-bold text-center text-xl py-5">{recipe.Name}</h2>
                <img src={recipe.image} alt={recipe.name} className='cursor-pointer w-full h-96 object-cover rounded-lg mb-2'></img>
                
            </div>
        ))}
        </div>
      </div>
  )
}

export default Gallery
