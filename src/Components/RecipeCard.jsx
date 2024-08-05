import React from 'react'

function RecipeCard({recipe, onDelete, onImageClick}) {
        const handleDeleteClick = () => {
            onDelete = (recipe.id)
        }
  return (
    <>
    <div className='bg-green-200 reounded-md shadow-lg'>
        <h2 className='font-bold text-xl text-center py-2'>{recipe.Name}</h2>
        <img src={recipe.image} alt={ recipe.Name } onClick={() => (onImageClick(recipe.id))} className='cursor-pointer w-full h-96 object-cover rounded-lg m-2'></img>

        <button onClick={handleDeleteClick} className='bg-red-500 text-white rounded-md p-3'>Delete</button>
        </div>  
    </>
  )
}

export default RecipeCard
