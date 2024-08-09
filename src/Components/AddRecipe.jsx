import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";


function AddRecipe({recipes, setRecipes}) {
    const [error, setError] = useState("");
    const [newRecipe, setNewRecipe] = useState({
        Name : "",
        Ingredients : "",
        Procedure : ""  
    });
    
    const navigate = useNavigate();
    const addRecipe = async (e) => {
        e.preventDefault ();
        const {Name, Ingredients, Procedure} = newRecipe;
        const formValid = Name && Ingredients && Procedure;
         if (!formValid) {
                setError("All fields are required");
                return ;
         }
        
          const recipeToAdd = {
              id: uuidv4(),
              ...newRecipe
            }
        
         try{
          const response = await axios.post("http://localhost:8000/recipe", recipeToAdd)
           if(response.status === 201) {
            setRecipes([...recipes, recipeToAdd]);
            setNewRecipe({Name: "", Ingredients: "", Procedure: ""});
            setError("");
            alert("New Recipe sucessfully added");
            navigate('/gallery')
           }else{
            setError("Failed to add new recipe");
           }
         }catch (e) {
          setError("Error occured while adding");
          console.error(e);
         }
      }

  return (
    <>
    
      <div className="bg-gradient-to-tr from-blue-200 via-green-300 to-lime-500 flex center justify-center ">
            <img src='/src/assets/images/logo.png' className='mx-5 my-5'></img>
            <h1 className='my-20 text-center font-bold text-5xl'> Welcome to Alice's Kitchen </h1>     
        </div>
        <form onSubmit={addRecipe} className='bg-gradient-to-tr from-blue-200 via-green-300 to-lime-500 h-screen w-full pt-36 flex justify-center align-center'>
         <div className='m-10 px-5 text-2xl font-semibold border-2 border-solid bg-lime-200 h-3/6'>
         {error && <div className='text-red font-bold text-xl' >{error }</div>}
         <div className='flex m-5 p-2'>
          <label className='text-lg font-semibold p-3'>Name</label>
          <input className='bg-transparent rounded-md border border-2 w-full p-3' value={newRecipe.Name} onChange={(e) => setNewRecipe({ ...newRecipe, Name:e.target.value})} required></input>
          </div>
          <div className='flex m-5 p-2'>
          <label className='text-lg font-semibold p-3'>Ingredients</label>
          <input className='bg-transparent rounded-md border border-2 w-full p-3' value={newRecipe.Ingredients} onChange={(e) => setNewRecipe({ ...newRecipe, Ingredients:e.target.value})} required></input>
          </div>
          <div className='flex m-5 p-2'>
          <label className='text-lg font-semibold p-3'>Procedure</label>
          <input className='bg-transparent rounded-md border border-2 w-full p-3' value={newRecipe.Procedure} onChange={(e) => setNewRecipe({ ...newRecipe, Procedure:e.target.value})} required></input>
          </div>
          <button className='font-bold text-2xl text-center bg-green-200 text-black border border-2 border-green-300 rounded-3xl mr-10 p-2 w-full hover:bg-green-300 active:scale-[.98] 
                active:duration-75 hover:scale-[1.02] ease-in-out transition-all' type='submit'>Add New Recipe</button>
         </div>
        </form>
    </>
  )
    }

export default AddRecipe
