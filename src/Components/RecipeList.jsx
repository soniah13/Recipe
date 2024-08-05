import React from 'react'
import RecipeCard from './RecipeCard'

function RecipeList({recipe, onDelete, onImageClick}) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-4 gap-6 grid-rows-5 bg-green-100" >
            {recipe.map((recipe) => (
                <RecipeCard key={recipe.id} recipe = {recipe} onDelete = {onDelete}  onImageClick={onImageClick}/> 
            ))}
      </div>
    </>
  );
}

export default RecipeList
