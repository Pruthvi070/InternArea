/* eslint-disable no-unused-vars */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar.jsx'
import Sidebar from './Components/Navbar/Sidebar.jsx';

import Home from './Components/Home/Home.jsx';
import Footer from './Components/Footerr/Footer.jsx';
const App = () => {
  return (
    <div>
      <Navbar />
      <Home/>
      <Footer/>

    </div>
  )
}

export default App

