import './App.css';
import Footer from './Components/Footerr/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Register from './Components/auth/Register';
import Intern from "./Components/Internships/Intern"
import JobAvl from "./Components/Job/JobAvl"

function App() {

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/internship' element={<Intern />} />
        <Route path='/Jobs' element={<JobAvl />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;