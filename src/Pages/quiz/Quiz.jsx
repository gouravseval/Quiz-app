import React, { useRef, useState } from 'react';
import Header from '../../components/Header/Header';
import { useEffect } from 'react';
import Questions from '../../components/questions/Questions';
import { useNavigate } from 'react-router-dom';
import './quiz.css'
import { useDispatch, useSelector } from 'react-redux';
import { attemptedQues, flag, flagNext } from '../../redux/slices/scoreSlices';
import { fetchData } from '../../redux/slices/dataSlice';



let length = 0;
function Quiz() {
  const refreshNavigate = useNavigate()
  const refreshFlagSelector1 = useSelector(state => state.score.refreshflag1)
  const flagNextSelector = useSelector(state => state.score.flagNext)
  const categorySelector = useSelector(state => state.ques.Questions.category)
  const scoreBoard = useNavigate()
  const attemptedQuesDispatch = useDispatch()
  const dispatch = useDispatch()
  const dataSelector = useSelector(state => state.data.value)
  const [buttonText, setButtonText] = useState("Next -->")
  const buttonRef = useRef()
  const [quesNum, setQuesNum] = useState(0)
  const [quesNum1, setQuesNum1] = useState(1)

  useEffect(() => {
    if (!refreshFlagSelector1) {
      refreshNavigate('/category')
    }
    dispatch(fetchData())
  }, []);



  return (
    <div className='flex flex-col gap-24'>
      <Header />
      <div className=' relative flex  gap-20 flex-col w-screen justify-center items-center'>
        {
          dataSelector.map((e) => {
            if (e.category.toUpperCase() == categorySelector) {
              length = e.questions.length
              return <div key={crypto.randomUUID()}>
                {
                  <Questions id={quesNum1} ques={e.questions[quesNum].ques} opt1={e.questions[quesNum].opt1} opt2={e.questions[quesNum].opt2} opt3={e.questions[quesNum].opt3} opt4={e.questions[quesNum].opt4} corrAns={e.questions[quesNum].correctOpt} />
                }
              </div>
            }
          })
        }
      </div>

      <button ref={buttonRef} onClick={(e) => {
        
          if (quesNum < length) {
            setQuesNum(() => quesNum + 1)
            attemptedQuesDispatch(attemptedQues())
            console.log(length);
            if (quesNum == length - 1) {
              scoreBoard("/score")
            }
          } if (quesNum == length - 2) {
            e.target.classList.add("blue")
            setButtonText("Finish")
          }
          setQuesNum1(() => quesNum1 + 1)
         
        dispatch(flagNext(false))
      }
      }
        className='absolute bottom-32 right-8 xl:right-36 sm:right-10 lg:right-28 sm:bottom-40 md:right-20 lg:bottom-56 md:bottom-56 xl:bottom-56 w-32 h-10 bg-green-400 rounded-lg '>{buttonText}</button>
    </div>
  );
}

export default Quiz;
