import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Score() {
  const correctSelector = useSelector(state => state.score.value)
  const wrongSelector = useSelector(state => state.score.attemptedQues - state.score.value)
  const totalSelector = useSelector(state => state.score.attemptedQues)
  const refreshNavigate = useNavigate()
  const refreshFlagSelector1 = useSelector(state => state.score.refreshflag1)

  useEffect(() => {
    if (!refreshFlagSelector1) {
      refreshNavigate('/category')
    }
  }, [])

  return (
    <div className='flex flex-col gap-16 items-center justify-center'>
      <Header />
      <div className='flex flex-col items-center justify-center h-96 w-96 rounded-2xl bg-gray-300'>
        <div className='text-[20px] font-bold'>Correct Questions  = <span className='text-green-400'>{correctSelector}</span></div>
        <div className='text-[20px] font-bold'>Wrong or Skip Questions = <span className='text-red-400'>{wrongSelector}</span></div>
        <div className='text-[20px] font-bold'>Total Attempt = {totalSelector}</div>
      </div>
      <button onClick={()=>refreshNavigate('/category')} className='outline-none border-none bg-blue-400 w-48 h-10 rounded-lg text-white'>Play Another</button>
    </div>
  );
}

export default Score;