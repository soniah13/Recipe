import React from 'react'

function About() {
  return (
    <>
      <div className='bg-gradient-to-tr from-green-500 via-green-300 to-lime-500'>
        <h1 className='text-4xl font-bold text-center py-10'>About Alice's Kitchen</h1>
            <h2 className='text-2xl underline font-bold py-10 ml-20 text-left pl-10 uppercase'>Meet Alice<hr/></h2>
            <div className='grid grid-cols-2 grid-rows-1'>
            <img src='/src/assets/images/allFood + shosh.png' className= 'px-20 mt-10'></img>
            
            <div className='mx-20 text-center'>
            <p className=' rounded-lg h-10/12 w-10/12 text-black font-bold text-2xl ml-10 py-5'>Alice is a mum of one and a grandma of very many.<br/> She is kind, loving and the most generous woman I know.<br/> 
                 When it comes to cooking she is also very generous with flavour and her food just comes out tasting delicious. <br/>
             She is so modest with her cooking skills so this website is a gift for her<br/> and also to the world that is missing out.<br/>
             I have tasted food but when it comes to Alice's food<br/> you will eat even when you have no appetite.<br/>
             To Grandma Alice its just about cooking but also art. How she sets the food is exquisite , and it is her love language.<br/>
              If you get to taste Alice's food then your standard for food will increase a notch.  <br/><span className='text-purple-700 text-3xl'>There is magic in every bite</span> </p>
             <p className=' font-bold text-black bg-purple-300 my-10 text-2xl leading-loose'>"This website is a birthday present:</p>
             <span className='text-white text-5xl leading-loose'> Happy birthday Grandma from you favourite granddaughter.</span>
             <div className='my-10'>
             <img src='/src/assets/images/all foods.png'></img>
             </div>
             </div>
             </div>   
      </div>
    </>
  )
}

export default About
