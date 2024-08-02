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
        path: 'about-us',
        element: <AboutUs />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'sign-up',
        element: <SignUp/>
      },
      {
        path: 'questionnaire',
        element: <Questionnaire/>
      },
      {
        path: 'homepage',
        element: <Homepage />
      },
      {
        path: 'my-workouts',
        element: <MyWorkouts />
      },
      {
        path: 'log',
        element: <Log />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
