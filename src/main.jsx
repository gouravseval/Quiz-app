import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignUp from './Pages/signUp/SignUp.jsx'
import Login from './Pages/login/Login.jsx'
import Home from './components/Home/Home.jsx'
import Quiz from './Pages/quiz/Quiz.jsx'
import Admin from './Pages/admin/Admin.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store/store.js'
import AuthorDetails from './Pages/AuthorDetails/AuthorDetails.jsx'
import Category from './Pages/category/Category.jsx'
import Score from './Pages/score/Score.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/author",
    element: <AuthorDetails/>,
  },
  {
    path: "/category",
    element: <Category/>,
  },
  {
    path: "/score",
    element: <Score/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
