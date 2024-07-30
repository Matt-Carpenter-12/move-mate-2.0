import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LandingPage from './Components/LandingPage.jsx'

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
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
