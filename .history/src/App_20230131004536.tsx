
import React from 'react';
import 


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
      <Navbar />
      {/* <Home /> */}
      {/* <Projects /> */}
      {/* <Contacts /> */}
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;
