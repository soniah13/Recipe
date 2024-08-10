import React, { useState } from 'react'

function Search({onSearch, onChange}) {
    const [searchText, setSearchText] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault;
      console.log({category});
    }

    const handleInputChange = (e) => {
      const value = e.target.value;
      setSearchText(value);
        onSearch(value, category);
    };

    const handleCategoryChange = (e) => {
      const value = e.target.value;
      setCategory(value);
      console.log("selected category", value);
      onChange(searchText,value)
    }

  return (
    <div className='flex justify-center align-center '>
      <form onSubmit={handleSubmit} className='mx-2'>
      <div className='my-2'>
        <input type='text' onChange={handleInputChange} value={searchText} placeholder='what do you crave?' 
        className='border-b bg-green-100 text-black text-xl py-3 w-96 text-center '></input> 
      </div>
        <select value={category} onChange={handleCategoryChange} className='border border-black bg-green-100 text-center text-black text-x  my-2 w-96' >
          <option value="" >Choose Category</option>
          <option value="Vegetarian" >Vegetarian</option>
          <option value="Soup" >Soup</option>
          <option value="Dessert" >Dessert</option>
          <option value="Drink" >Drink</option>
          <option value="salad" >Salad</option>
          <option value="snack" >Snack</option>
          <option value="oven meal" >Oven-meal</option>
          <option value="stew" >Stew</option>
          <option value="Gluten free" >Gluten-free</option>
          </select>
      </form>
          
    </div>
  )
}

export default Search