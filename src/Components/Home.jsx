import React from 'react';


function Home () {

    return (
        <>
        <div className="bg-gradient-to-tr from-green-500 via-green-300 to-lime-500 flex center justify-center">
            <img src='/src/assets/images/logo.png' className='mx-5 my-5'></img>
            <h1 className='my-20 text-center font-bold text-5xl'> Welcome to Alice's Kitchen </h1>     
        </div>
        <img src='src/assets/images/background.png' className='w-full h-full '></img> 
        
        </>
    )
}
export default Home;