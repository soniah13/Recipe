import React from 'react';
import axios from 'axios';

function RecipeCard({ recipe, handleDelete, onImageClick }) {
    return (
        <>
            <div className='bg-green-200 rounded-md shadow-lg'>
                <h2 className='font-bold text-xl text-center py-2'>{recipe.Name}</h2>
                <img src={recipe.image} alt={recipe.Name} onClick={() => onImageClick(recipe.id)} className='cursor-pointer w-full h-96 object-cover rounded-lg m-2' />

                <button onClick={() => handleDelete(recipe.id)} className='bg-red-500 text-white rounded-md p-3'>Delete</button>
            </div>
        </>
    );
}

export default RecipeCard;
