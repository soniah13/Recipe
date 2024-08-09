import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function RecipeDetails() {
    const {id} = useParams();
    const [recipe, setRecipe] = useState([]);

    useEffect (() => {
        console.log('useEffect called')
        fetch (`http://localhost:8000/recipe/${id}`)
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
        
          <div key={id}>
          <h1 className='text-center text-3xl font-bold underline'>{recipe.Name}</h1>
          <div className='grid grid-cols-2 grid-rows-1'>
          <div className='flex justify-center align-center'>
          <img src= {recipe.image} alt={recipe.Name} className='w-5/6 h-5/6 center object-cover my-10' ></img>
          </div>
          <div className='p-10'>
          <p className='text-xl text-left p-2'><strong>Category:</strong>{recipe.category}</p>
          <p className='text-xl text-left p-2'><strong>Preparation Time:</strong>{recipe.prep}</p>
          <p className='text-xl text-left p-2'><strong>Serving:</strong>{recipe.serving}</p>
          <h2 className='text-xl text-left font-bold mb-2 p-2'>Ingredients</h2>
          <ul className='list-disc ml-5 mb-4 p-2'>
            {recipe.Ingredients && recipe.Ingredients.split(',').map((ingredients,index) => (
            <li key={index}>{ ingredients}</li>
            ))}
          </ul>
          <h3 className='text-xl text-leftt font-bold mb-2 p-2'>Procedure</h3>
          <p>{recipe.Procedure}</p>
          </div>
          </div>
          </div>
        

        
      </div>
    </>
  )
}

export default RecipeDetails