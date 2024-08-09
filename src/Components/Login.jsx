import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    alert("You are signed in")
    try{
       const response = await axios.get ('http://localhost:8001/users', {
        params: {
        email, password
        }
       });

       const user = response.data.find(user => user.email === email && user.password === password);

       if (user) {
        alert("You are signed in");
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/gallery')
       }else {
        setError("Invalid email or password, register first");
       }
    } catch (e) {
      setError("An error occured. please try again.");
      console.error(e);
    }
   };

   function toggleShowPassword (){
    setShowPassword(!showPassword);
   };

   const handleRegisterClick = () => {
    navigate('/register')
   };


  return (
    <>
      <div className='bg-gradient-to-tr from-blue-200 via-green-300 to-lime-500 h-screen w-full pt-36 flex justify-center align-center '>
        <div className='h-3/4 w-1/2 center bg-yellow-100 rounded-3xl'>
        <h1 className='text-center text-4xl font-bold mt-10 underline'>Welcome To Alice Kitchen</h1>
        <p className='text-center text-xl text-green-700 my-5'>yeeeey! you already a member</p><hr/>
        {error? (<div>{error}</div>): ('')}
        <form onSubmit={handleSubmit}>
            <div className='flex m-5 p-5'>
                <label htmlFor='email' className='text-xl font-semibold p-3 '>Email</label>
                <input className='bg-transparent rounded-md border border-2 border-green-200 w-full p-3' id='email' type='email' value={email}
                 placeholder='Enter your email' onChange={e => setEmail(e.target.value)} required />
            </div>
            <div className='flex m-5 p-5'>
                <label htmlFor='password' className='text-lg font-semibold p-3' >Password</label>
                <input className='bg-transparent rounded-md border border-2 border-green-200 w-full p-3' id='password'type={showPassword? 'text':'password'} value={password} 
                placeholder='Enter your password' onChange={e => setPassword(e.target.value)} required />
                <button className='text-3xl' type='button' onClick={toggleShowPassword} 
                aria-label= {showPassword? "Hide password" : "Show password"}>{showPassword? '🙈' : '👁️'}</button>
            </div>
            <div className='flex mx-10 justify-center align-center'>
                <input type= 'checkbox' id='remember' className='ml-3 font-semibold text-l  '></input>
                <label className='ml-2 mr-5'>Remember me</label>
                <button className='ml-20 font-semibold text-l text-purple-700 hover:underline'>forgot Password</button>
            </div>
            <div className='flex flex-col justify-center p-10 gap-y-5'>
                <button className='font-bold text-2xl text-center bg-green-200 text-black border border-2 border-green-300 rounded-3xl mr-10 p-2 w-full hover:bg-green-300 active:scale-[.98] 
                active:duration-75 hover:scale-[1.02] ease-in-out transition-all active:bg-purple-600' onClick={handleSubmit}>Sign In</button>
                <button type='button' onClick={handleRegisterClick} className='text-xl font-semibold hover:underline  '>Register first</button>
            </div>    
        </form>
        </div>
      </div>
    </>
  )
}

export default Login