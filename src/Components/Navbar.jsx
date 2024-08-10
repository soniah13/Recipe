import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <div className='flex m-0 p-0 border border-solid border-2 bg-green-400'>
                <nav className='font-semibold text-2xl py-3'>
                    <ul className='flex uppercase'>
                        <div className='flex float-right sticky top-2'>
                            <Link to='/' className='hover:border-b border-3 border-black float-right px-3'>Home</Link>
                            <Link to='/gallery' className='hover:border-b border-3 border-black float-right px-3'>Gallery</Link>
                            <Link to='/addRecipe' className='hover:border-b border-3 border-black float-right px-3'>Add your Recipe</Link>
                            <Link to='/about' className='hover:border-b border-3 border-black float-right px-3'>About Us</Link>
                            <Link to='/suprise' className='hover:border-b border-3 border-black float-right px-3'>Suprise Me</Link>
                        </div>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
