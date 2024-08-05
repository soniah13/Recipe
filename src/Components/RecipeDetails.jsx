import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function RecipeDetails() {
    const {id} = useParams();
    const [recipe, setRecipe] = useState(null);

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
            setRecipe(data);
            console.log(data)
        })
        .catch((error) => console.error("Error Fetching data", error))
    },[id])

    if(!recipe) return <p>Loading...</p>
  return (
    <>
      <div className='p-5 bg-green-100 w-full h-full'>
        <h1 className='text-center text-3xl font-bold underline'>{recipe.Name}</h1>
        <img src= {recipe.image} alt={recipe.Name} className='w-full h-full object-cover my-10' ></img>
        <p className='text-xl text-left'><strong>Category:</strong>{recipe.category}</p>
        <p className='text-xl text-left'><strong>Preparation Time:</strong>{recipe.prep}</p>
        <p className='text-xl text-left'><strong>Serving:</strong>{recipe.serving}</p>
        <h2 className='text-xl text-left font-semibold mb-2'>Ingredients</h2>
        <ul className='list-disc ml-5 mb-4'>{recipe.Ingredients && recipe.Ingredients.split(',').map((ingredients,index) => (
            <li key={index}>{ ingredients}</li>
        ))}
        </ul>
        <h3 className='text-xl text-leftt font-semibold mb-2'>Procedure</h3>
        <p>{recipe.Procedure}</p>

        
      </div>
    </>
  )
}

export default RecipeDetails
