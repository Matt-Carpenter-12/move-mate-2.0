import { useState } from 'react';
import './App.css';
import Error from './Components/Error';
import Homepage from './Components/Homepage'
import LandingPage from './Components/LandingPage';
import Login from './Components/login'
import Questionnaire from './Components/Questionnaire';
import SignUp from './Components/SignUp';


function App() {
  const [count, setCount] = useState(0)
  const isLoggedIn = true;

  let content;
  try {
    if (isLoggedIn) {
      content = <Homepage />;
    } else {
      content = <LandingPage />;
    }
  } catch (error) {
    console.error(error);
    content = <Error />;
  }
  
  return (
    <>
     {content}
     <SignUp />
     {/* <Questionnaire /> */}
    </>
  )
}

export default App
