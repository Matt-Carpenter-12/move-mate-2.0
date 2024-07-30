import { useState } from 'react'
import './App.css'
import Questionnaire from './Components/Questionnaire';
import Login from './Components/login'

function App() {
  const [count, setCount] = useState(0)

  let content;
  if (isLoggedIn) {
    content = <Homepage />
  } else {
    content = <LandingPage />
  }

  return (
    <>
     {content}
    </>
  )
}

export default App
