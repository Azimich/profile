
import React from 'react';
import Header from './components/header/Header';
import { HeaderData } from './components/header/MockData';
import Main from './components/main/Main';

import Navbar from './components/navbar/Navbar';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      {HeaderData.map(props => {
        return <Header key={props.id} {...props} />;
      })}
      <Main />
      <Footer
    </div>
  );
}

export default App;
