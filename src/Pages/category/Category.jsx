import React, { useEffect } from 'react';
import { fetchData } from '../../redux/slices/dataSlice';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import { categoryData, refreshFlag1 } from '../../redux/slices/scoreSlices';
import { useNavigate } from 'react-router-dom';
import { category } from '../../redux/slices/questionsSlice';

function Category() {
    const dispatch = useDispatch()
    const quizNavigate = useNavigate()
    const dataSelector = useSelector(state => state.data.value)
    // console.log(dataSelector);
    useEffect(() => {
        dispatch(fetchData())
    }, [])
    return (
        <div>
            <Header />
            <div className='mt-24 w-screen rounded-xl flex items-center justify-center flex-col gap-7'>
                <h1 className='text-[28px] font-bold mb-10'>Select a category for quiz</h1>
                {
                    dataSelector.map((data) => {

                        return <div className='relative  bg-blue-300 w-52 cursor-pointer h-16 rounded-xl flex items-center justify-center text-[18px]' key={data.id}>
                            <input
                                onClick={(e) => {
                                    dispatch(refreshFlag1(true))
                                    dispatch(category(e.target.value))
                                    quizNavigate('/quiz')
                                }}
                                value={data.category.toUpperCase()}
                                readOnly
                                className='border-none text-center outline-none bg-blue-300 w-52 cursor-pointer h-16 rounded-xl flex items-center justify-center text-[18px]' />
                            <div className='text-[12px] absolute bottom-0 right-2'>by {data.creator.toUpperCase()}</div>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default Category;
