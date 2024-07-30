import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    //need to fix
    <div className="flex-column justify-flex-start min-100-vh">
        {/* <Header /> */}
        <div className="container">
          <Outlet />
        </div>
        <Footer />
      </div>
  );
}

export default App
