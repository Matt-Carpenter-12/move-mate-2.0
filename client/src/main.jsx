import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
//importing pages 
import Error from './Components/Error.jsx'
import LandingPage from './pages/LandingPage.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/Signup.jsx'
import Homepage from './pages/Homepage.jsx'
import MyWorkouts from './pages/MyWorkouts.jsx'
import Log from './pages/Log.jsx'
import Questionnaire from './pages/Questionnaire.jsx'

//creating router for pages to go to
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <LandingPage />
      },
      {
        path: '/About-Us',
        element: <AboutUs />
      },
      {
        path: '/Login',
        element: <Login />
      },
      {
        path: '/Sign-Up',
        element: <SignUp/>
      },
      {
        path: '/Questionnaire',
        element: <Questionnaire/>
      },
      {
        path: '/Homepage',
        element: <Homepage />
      },
      {
        path: '/My-Workouts',
        element: <MyWorkouts />
      },
      {
        path: '/Log',
        element: <Log />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
