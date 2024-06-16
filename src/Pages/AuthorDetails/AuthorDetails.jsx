import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { category, creator } from '../../redux/slices/questionsSlice';
import { useNavigate } from 'react-router-dom';
import { refreshFlag } from '../../redux/slices/scoreSlices';
import { Link } from 'react-router-dom';
function AuthorDetails() {

    const authorDispatch = useDispatch()
    const categoryDispatch = useDispatch()
    const adminNavigate = useNavigate()
    const refreshFlagDispatch = useDispatch()
    const [flag1, setFlag1] = useState(false)
    const [flag2, setFlag2] = useState(false)

    return (
        <div className='flex flex-col gap-7 w-screen items-center'>
            <Link to="/category" className='absolute right-5 top-3 text-[20px] px-10 py-2 bg-green-500 text-white rounded-xl' >Play</Link>
            <h1 className='text-[24px] font-bold text-center mt-52'>Please fill this first.</h1>
            <div className='flex gap-2 items-center'>
                <label htmlFor="opt1">&nbsp;&nbsp;&nbsp;&nbsp;Author -</label>
                <input
                    onChange={(e) => {
                        authorDispatch(creator(e.target.value))
                        if (e.target.value != "") {
                            setFlag1(true)
                        }else{
                            setFlag1(false)
                        }
                    }}
                    className='border-2 border-black rounded-xl px-3 w-80 h-10'
                    name='option1'
                    type="text" />
            </div>


            <div className='flex gap-2 items-center'>
                <label htmlFor="opt1">Category -</label>
                <input
                    onChange={(e) => {
                        categoryDispatch(category(e.target.value))
                        if (e.target.value != "") {
                            setFlag2(true)
                        }else{
                            setFlag2(false)
                        }
                    }}
                    className='border-2 border-black rounded-xl px-3 w-80 h-10'
                    name='option1'
                    type="text" />
            </div>

            <button
                onClick={() => {
                    if(flag1 && flag2){
                        adminNavigate('/admin')
                        refreshFlagDispatch(refreshFlag(true))
                    }else{
                        alert("Please fill the detials")
                    }
                }}
                className='bg-green-400 rounded-lg px-10 py-2 outline-none text-white'>Next</button>
        </div>
    );
}

export default AuthorDetails;
