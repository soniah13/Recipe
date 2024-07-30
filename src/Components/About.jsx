import React from 'react'

function About() {
  return (
    <>
      <div className='bg-purple-200'>
        <h1 className='text-4xl font-bold text-center py-10'>About Alice's Kitchen</h1>
            <h2 className='text-xl underline font-semibold py-10 ml-20 text-center'>Meet Alice</h2>
            <div className='flex flex-wrap'>
            <img src='/src/assets/images/allFood + shosh.png' className='px-20'></img>
            
            <div className=''>
            <p className='border border-2 rounded-md h-96 w-full bg-purple-500 text-black font-bold text-2xl p-5'>Alice is a mum of one and a grandma of very many.<br/> she is kind, loving and the most generous woman I know.<br/> 
                So when it comes to cooking she is also very generous with flavour<br/> and her food just comes out tasting delicious. <br/>
             She is so humble with her cooking skills so this website is a gift for her<br/> and also to the world that is missing out.<br/>
             I have tasted food but when it comes to Alice's food<br/> you will eat even when you have no appetite:rolling_on_the_floor_laughing:.<br/>
             To Grandma Alice its just about cooking but also art. How she sets the food is exquisite ,<br/> and it is her love language. <span className='text-purple-200'>There is magic in every bite</span><br/>
              If you get to taste Alice's food then your standard for food will increase a notch </p>
             <p className='border border-2 font-bold text-black bg-purple-300 my-20 text-xl'>"This website is also a birthday present so:<br/><span className='text-purple-900 text-puple-900 text-4xl'> Happy birthday Grandma from you favourite granddaughter.</span></p>
             <img src='/src/assets/images/all foods.jpg'></img>
             </div>
             </div>
      </div>
    </>
  )
}

export default About
