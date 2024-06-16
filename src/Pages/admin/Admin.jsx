import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { questions } from '../../redux/slices/questionsSlice';
import Header from '../../components/Header/Header';
import { useNavigate } from 'react-router-dom';

const b = ">"



function Admin() {

  const QuesOBj = {
    ques: "",
    opt1: "",
    opt2: "",
    opt3: "",
    opt4: "",
    correctOpt: ""
  }
  

  let status = {
    check1: true,
    check2: false,
    check3: false,
    check4: false
  }

  const [quesFlag, setQuesFlag] = useState(false)
  const [opt1Flag, setOpt1Flag] = useState(false)
  const [opt2Flag, setOpt2Flag] = useState(false)
  const [opt3Flag, setOpt3Flag] = useState(false)
  const [opt4Flag, setOpt4Flag] = useState(false)
  const [tick1, setTick1] = useState(false)
  const [tick2, setTick2] = useState(false)
  const [tick3, setTick3] = useState(false)
  const [tick4, setTick4] = useState(false)
  const [checkFlag, setCheckflag] = useState(false)
  const quesRef = useRef()
  const opt1Ref = useRef()
  const opt2Ref = useRef()
  const opt3Ref = useRef()
  const opt4Ref = useRef()
  const userSelector = useSelector(state => state.score.user)
  const quesSelector = useSelector(state => state.ques.Questions)
  const refreshFlagSelector = useSelector(state => state.score.refreshFlag)
  const quesDispatch = useDispatch()
  const refreshNavigate = useNavigate()

  useEffect(() => {
    if (!refreshFlagSelector) {
      refreshNavigate('/author')
    }
  }, []);

const valueAssign = () => {
  
    QuesOBj.ques = quesRef.current.value
    QuesOBj.opt1 = opt1Ref.current.value
    QuesOBj.opt2 = opt2Ref.current.value
    QuesOBj.opt3 = opt3Ref.current.value
    QuesOBj.opt4 = opt4Ref.current.value
 
}


  const sendingData = async () => {
    try {
      await fetch("https://66699eb32e964a6dfed5e521.mockapi.io/question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(quesSelector),
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Error in uploading questions")
    }
  }

  const zeroFunc = () => {
    quesRef.current.value = ""
    opt1Ref.current.value = ""
    opt2Ref.current.value = ""
    opt3Ref.current.value = ""
    opt4Ref.current.value = ""
  }

  const optionValidation = () => {
    if (status.check1 || status.check2 || status.check3 || status.check4) {
      setCheckflag(true)
    } else {
      alert("select the correct option")
    }
  }

  const optionSelect = () => {
    if (tick1 == true) {
      QuesOBj.correctOpt = opt1Ref.current.value
    }
    if (tick2 == true) {
      QuesOBj.correctOpt = opt2Ref.current.value
    }
    if (tick3 == true) {
      QuesOBj.correctOpt = opt3Ref.current.value
    }
    if (tick4 == true) {
      QuesOBj.correctOpt = opt4Ref.current.value
    }
  }


  return (
    <div className='flex items-center h-screen w-screen flex-col bg-gray-100'>
      {/* header */}
      <div className='bg-gray-200 w-screen h-20 px-5 xl:px-16 lg:px-16 md:px-12 flex items-center justify-between'>
        <span className='text-[20px]  font-bold'>Quiz app</span>
        <div className='flex items-center justify-center gap-4  xl:gap-10 '>
          <div className='font-bold text-[24px]'>Welcome {userSelector.toUpperCase()}</div>
        </div>
      </div>
      {/* header end */}
      <form onSubmit={(e) => {
        e.preventDefault()
      }}>
        <div className='mt-10'>
          <h1 className='font-bold text-[36px] text-center'>Create your Quiz</h1>
          <div className='flex flex-col gap-1 mt-10'>
            <h1 className='font-bold text-[24px]'>Question No. </h1>
            <input
              ref={quesRef}
              onChange={(e) => {
                if (e.target.value != "") {
                  setQuesFlag(true)
                } else {
                  setQuesFlag(false)
                }
              }}
              className='border-2 border-black rounded-xl px-3 h-10 xl:w-[50vw]'
              name='question'
              type="text" />
          </div>
          <div className='flex flex-col gap-3 mt-8 '>
            <span>Options</span>

            <div className='flex gap-2 items-center'>
              <label htmlFor="opt1">1).</label>

              <input
                ref={opt1Ref}
                onChange={(e) => {
                  if (e.target.value != "") {
                    setOpt1Flag(true)
                  } else {
                    setOpt1Flag(false)
                  }
                }}
                className='border-2 border-black rounded-xl px-3 w-60 h-10'
                name='option1'
                type="text" />

              <input value={status.check1}
                checked={tick1}
                onChange={(e) => {
                  status = {
                    check1: true,
                    check2: false,
                    check3: false,
                    check4: false
                  }
                  setTick1(status.check1)
                  setTick2(false)
                  setTick3(false)
                  setTick4(false)
                  optionValidation()
                }}
                type="checkbox"
                name="option"
                id="" />

            </div>



            <div className='flex gap-2 items-center'>
              <label htmlFor="opt1">2).</label>

              <input
                ref={opt2Ref}
                onChange={(e) => {
                  if (e.target.value != "") {
                    setOpt2Flag(true)
                  } else {
                    setOpt2Flag(false)
                  }
                }}
                className='border-2 border-black rounded-xl px-3 w-60 h-10'
                name='option1'
                type="text" />

              <input
                checked={tick2}
                value={status.check2}
                onChange={(e) => {
                  status = {
                    check1: false,
                    check2: true,
                    check3: false,
                    check4: false,
                  }
                  setTick2(status.check2)
                  setTick1(false)
                  setTick3(false)
                  setTick4(false)
                  optionValidation()
                }}
                type="checkbox"
                name="option"
                id="" />
            </div>



            <div className='flex gap-2 items-center'>
              <label htmlFor="opt1">3).</label>

              <input
                ref={opt3Ref}
                onChange={(e) => {
                  if (e.target.value != "") {
                    setOpt3Flag(true)
                  } else {
                    setOpt3Flag(false)
                  }
                }}
                className='border-2 border-black rounded-xl px-3 w-60 h-10'
                name='option1'
                type="text" />

              <input
                checked={tick3}
                value={status.check3}
                onChange={(e) => {
                  status = {
                    check1: false,
                    check2: false,
                    check3: true,
                    check4: false,
                  }
                  setTick1(false)
                  setTick2(false)
                  setTick3(status.check3)
                  setTick4(false)
                  optionValidation()
                }}
                type="checkbox"
                name="option"
                id="" />
            </div>



            <div className='flex gap-2 items-center'>
              <label htmlFor="opt1">4).</label>

              <input
                ref={opt4Ref}
                onChange={(e) => {
                  QuesOBj.opt4 = e.target.value
                  if (e.target.value != "") {
                    setOpt4Flag(true)
                  } else {
                    setOpt4Flag(false)
                  }
                }}
                className='border-2 border-black rounded-xl px-3 w-60 h-10'
                name='option1'
                type="text" />

              <input
                checked={tick4}
                value={status.check4}
                onChange={(e) => {
                  status = {
                    check1: false,
                    check2: false,
                    check3: false,
                    check4: true,
                  }
                  setTick1(false)
                  setTick2(false)
                  setTick3(false)
                  setTick4(status.check4)
                  optionValidation()
                }
                }
                type="checkbox"
                name="option"
                id="" />
            </div>



            <div className='flex justify-between gap-80 mt-7'>
              <button
                onClick={() => {
                  sendingData()
                }}
                className='bg-blue-400 w-28 py-2 rounded-2xl'>Finish</button>

              <button
                onClick={() => {
                  optionValidation()
                  if (quesFlag && opt1Flag && opt2Flag && opt3Flag && opt4Flag && checkFlag) {
                    optionSelect()
                    valueAssign()
                    quesDispatch(questions(QuesOBj))
                    setOpt1Flag(false)
                    setOpt2Flag(false)
                    setOpt3Flag(false)
                    setOpt4Flag(false)
                    setTick1(false)
                    setTick2(false)
                    setTick3(false)
                    setTick4(false)
                    setCheckflag(false)
                    zeroFunc()
                    alert("Question added")
                  } else {
                    alert("Fill all the field")
                  }
                }}
                type='submit'
                className='bg-green-400 w-28 py-2 rounded-2xl'>
                Next --{b}
              </button>


            </div>

          </div>
        </div>
      </form>
    </div>
  );
}

export default Admin;
