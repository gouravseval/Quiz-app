import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
function Home() {

    return (
        <div className='bg-gray-100  h-screen w-screen flex flex-col items-center'>
             <Header/>
            <div className='bg-gray-100'>
                <h1 className='text-[32px] xl:text-[40px] md:text-[40px] lg:text-[40px] font-bold mt-20'>Welcome to Quiz Game</h1>
            </div>
            <div className='mt-20 flex flex-col gap-10'>
                <Link to="/category" className='flex h-20 w-80 text-[20px] font-bold hover:bg-blue-400 
                duration-100 bg-blue-500 text-white rounded-3xl justify-center items-center'>Want to Play</Link>
                <Link to="/login" className='flex-col flex text-[20px] font-bold bg-blue-500 hover:bg-blue-400 
                duration-100 text-white h-20 w-80 rounded-3xl justify-center items-center'>Create Your Own <span
                className=' text-[14px] font-normal text-gray-300'>( require Login )</span></Link>
            </div>      
        </div>
    );
}

export default Home;
