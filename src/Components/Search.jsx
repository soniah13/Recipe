import React from 'react'

function Search({onSearch}) {
    const handleInputChange = (e) => {
        onSearch(e.target.value);
    };

  return (
    <div>
      <div className='flex justify-center align-center m-2 '>
        <input type='text' onChange={handleInputChange} placeholder='what do you crave?' 
        className='border-b bg-green-100 text-black font-xl p-2 w-96 '></input>
        
      </div>
    </div>
  )
}

export default Search