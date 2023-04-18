
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Project from './pages/Project';
import Projects from './pages/Projects';
import './styles/main.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/" element={<Contacts />} />
        </Routes>
        {/* <Home /> */}
        {/* <Projects /> */}
        {/* <Contacts /> */}
        <Project />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
