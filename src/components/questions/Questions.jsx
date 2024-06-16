import React, { useEffect, useRef, useState } from 'react';
import './ques.css'
import { useDispatch, useSelector } from 'react-redux';
import {  flagNext, refreshFlag1, score } from '../../redux/slices/scoreSlices';

function Questions({ corrAns, id, ques, opt1, opt2, opt3, opt4 }) {

    const flagDispatch = useDispatch()
    const scoreDispatch = useDispatch()
    const [clickFlag, setClickFlag] = useState(true)
    const [opt, setOpt] = useState("bg-red-400")

    

    return (
        <div className='relative h-[34vh] flex flex-col'>
            <div className='px-4 py-3 text-[18px] text-center text-white bg-blue-400 xl:min-w-[60vw] rounded-xl'>
                {id}.)  {ques}
            </div>
            <div className="flex mt-8 flex-wrap flex-col w-[90vw] justify-between sm:w-[80vw] xs:w-[80vw] lg:w-[80vw] md:w-[85vw] sm:h-[80vh] min-w-44 md:flex-row lg:flex-row xl:flex-row gap-5">
                <button
                    onClick={(e) => {
                        if (clickFlag) {
                            if (opt1.toUpperCase() == corrAns.toUpperCase()) {
                                e.target.classList.add("green")
                                scoreDispatch(score())
                                setClickFlag(false)
                            } else {
                                e.target.classList.add("red")
                                setClickFlag(false)
                            }
                        }
                    }
                    }

                    className={`bg-gray-100  cursor-pointer w-[70vw] sm:w-[50vw] lg:w-[35vw] xl:w-[35vw] md:w-[35vw] h-12  border-2 border-black px-3 py-2 rounded-xl list-none `}>a). {opt1}</button>
                <button
                    onClick={(e) => {

                        if (clickFlag) {
                            if (opt2 == corrAns) {
                                e.target.classList.add("green")
                                scoreDispatch(score())
                                setClickFlag(false)
                            } else {
                                console.log("object");
                                e.target.classList.add("red")
                                setClickFlag(false)
                                
                            }
                        }
                    }
                    }

                    className=' cursor-pointer w-[70vw] sm:w-[50vw]  xl:w-[35vw]  lg:w-[35vw] md:w-[35vw]  h-12  border-2 border-black px-3 py-2 rounded-xl list-none'>b). {opt2}</button>
                <button
                    onClick={(e) => {

                        if (clickFlag) {
                            if (opt3 == corrAns) {
                                e.target.classList.add("green")
                                scoreDispatch(score())
                                 setClickFlag(false)
                                 
                            } else {
                                e.target.classList.add("red")
                                 setClickFlag(false)
                                 
                            }
                        }
                    }
                    }

                    className='bg-gray-100 cursor-pointer w-[70vw] sm:w-[50vw]  xl:w-[35vw]  lg:w-[35vw] md:w-[35vw]  h-12 border-2 border-black px-3 py-2 rounded-xl list-none '>c). {opt3}</button>
                <button
                    onClick={(e) => {

                        if (clickFlag) {
                            if (opt4 == corrAns) {
                                e.target.classList.add("green")
                                scoreDispatch(score())
                                 setClickFlag(false)
                                 
                            } else {
                                e.target.classList.add("red")
                                 setClickFlag(false)
                                 
                            }
                        }
                    }
                    }

                    className='bg-gray-100 cursor-pointer w-[70vw] sm:w-[50vw]  lg:w-[35vw] xl:w-[35vw]   md:w-[35vw]  h-12 border-2 border-black px-3 py-2 rounded-xl list-none '>d). {opt4}</button>

            </div>
        </div>
    );
}

export default Questions;
