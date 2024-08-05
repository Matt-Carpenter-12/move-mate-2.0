import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';
import NavTabs from './Components/NavTabs';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div >
      <NavTabs/>
        <Outlet />
        <Footer />
      </div>
  );
}

export default App
