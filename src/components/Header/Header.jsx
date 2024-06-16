import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
  
    <div className='bg-gray-200 w-screen h-20 px-5 xl:px-16 lg:px-16 md:px-12 flex items-center justify-between'>
        
                <span className='text-[20px]  font-bold'>Quiz app</span>
                <div className='flex items-center justify-center gap-4  xl:gap-10 '>
                    <Link to="/signup" className='bg-blue-500 hover:bg-blue-400 duration-100 text-white p-3 rounded-3xl px-5' >SignUp</Link>
                    <Link className='bg-blue-500 hover:bg-blue-400 duration-100 text-white p-3 rounded-3xl px-5' to="/login">Login</Link>
                </div>
            </div>
  );
}

export default Header;
