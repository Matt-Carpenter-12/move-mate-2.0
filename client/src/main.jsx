import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import LandingPage from './pages/LandingPage.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/Signup.jsx'
import Homepage from './pages/Homepage.jsx'
import MyWorkouts from './pages/MyWorkouts.jsx'
import Log from './pages/Log.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
        path: '/Homepage',
        element: <Homepage />
      },
      {
        path: '/My-Workouts',
        elemetn: <MyWorkouts />
      },
      {
        path: '/Log',
        elemetn: <Log />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
