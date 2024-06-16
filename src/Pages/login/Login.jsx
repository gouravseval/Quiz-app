import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { user } from '../../redux/slices/scoreSlices';


function Login() {
  const userDispatch = useDispatch()
  const [fetchedData, setFetchedData] = useState([])
  const userEmailRef = useRef()
  const userPassword = useRef()
  const adminNavigate = useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://66699eb32e964a6dfed5e521.mockapi.io/users")
      const data = await res.json()
      setFetchedData(data);
    }
    fetchData()
  }, []);

  console.log(fetchedData);

  const matchingData = () => {
    fetchedData.map((e) => {
      if (userEmailRef.current.value == e.email && userPassword.current.value == e.password) {
        userDispatch(user(e.username))
        adminNavigate("/author")
        alert("Succesfully logged In !")
      }
      if (userEmailRef.current.value != e.email && userPassword.current.value != e.password) {
        alert("invalid credentials")
      }
    })
  }


  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      matchingData()
    }}>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div
            className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transhtmlForm -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
          </div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl min:w-60 font-semibold">Login </h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">

                  <div className="relative">
                    <input
                      ref={userEmailRef}
                      name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                    <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                  </div>
                  <div className="relative">
                    <input
                      ref={userPassword}
                      name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                    <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                  </div>
                  <div className="relative">
                    <button className="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
                  </div>
                  <span className='flex  text-[14px]'>Doesn't have an account ?  &nbsp;<Link className='text-blue-500' to='/signUp'>Click here</Link></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>

  );
}


export default Login;

