import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Registration() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

        if(password !== confirmPassword) {
            setError("password does not match");
            return;
        }
        try{
            const response = await axios.post('http://localhost:8001/users', {
                email, password,
            });

            if (response.status === 201) {
                alert("You are successfully registered");
                navigate('/login');
            }else {
                setError("Registration failed")
            }
        } catch (e) {
            setError("An error occured");
    
        }
    };
    function toggleShowPassword (){
        setShowPassword(!showPassword);
       };
  return (
    <>
    <div className='bg-gradient-to-tr from-blue-200 via-green-300 to-lime-500 h-screen w-full pt-36 flex justify-center align-center '>
        <div className='h-5/6 w-1/2 center bg-yellow-100 rounded-3xl'>
        <h1 className='text-center text-4xl font-bold mt-10 underline'>Register at Alice Kitchen</h1>
        <p className='text-center text-xl text-green-700 my-5'>Add your details to become a member</p><hr/>
        {error? (<div className='text-red text-xl font-bold'>{error}</div>): ('')}
        <form onSubmit={handleRegister}>
            <div className='flex m-5 p-5'>
                <label htmlFor='email' className='text-xl font-semibold p-3 '>Email</label>
                <input className='bg-transparent rounded-md border border-2 border-green-200 w-full p-3' id='email' type='email' value={email}
                 placeholder='Enter your email' onChange={e => setEmail(e.target.value)} required />
            </div>
            <div className='flex m-5 p-5'>
                <label htmlFor='password' className='text-lg font-semibold p-3' >Password</label>
                <input className='bg-transparent rounded-md border border-2 border-green-200 w-full p-3' id='password'type={showPassword? 'text':'password'} value={password} 
                placeholder='Enter your password' onChange={e => setPassword(e.target.value)} required />
                <button className='text-3xl'  onClick={toggleShowPassword} type='button'
                aria-label= {showPassword? "Hide password" : "Show password"}>{showPassword? '🙈' : '👁️'}</button>
            </div>
            <div className='flex m-3 p-3'>
                <label htmlFor='confirm-password' className='text-lg font-semibold p-1' >Confirm Password</label>
                <input className='bg-transparent rounded-md border border-2 border-green-200 w-full p-3' id='confirm-password'type ='password' value={confirmPassword} 
                placeholder='Confirm your password' onChange={e => setConfirmPassword(e.target.value)} required />
            </div>
            <div className='flex mx-10 justify-center align-center'>
                <button className='ml-20 font-semibold text-l text-purple-700 hover:underline'>forgot Password</button>
            </div>
            <div className='flex flex-col justify-center p-10 gap-y-5'>
                <button className='font-bold text-2xl text-center bg-green-200 text-black border border-2 border-green-300 rounded-3xl mr-10 p-2 w-full hover:bg-green-300 active:scale-[.98] 
                active:duration-75 hover:scale-[1.02] ease-in-out transition-all active:bg-purple-600' type='submit'>Register</button>
                <button type='button' onClick={() => navigate('/login')} className='text-xl font-semibold hover:underline  '>Sign in you already registered</button>
            </div>    
        </form>
        </div>
      </div>
      
    </>
  )
}

export default Registration