
import React from 'react';
import Header from './components/header/Header';
import { HeaderData } from './components/header/MockData';

import Navbar from './components/navbar/Navbar';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      {HeaderData.map(props => {
        return <Header key={props.id} {...props} />;
      })}
      

 

      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
              <li className="social__item">
                <a href="#!">
                  <img src="./img/icons/vk.svg" alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src="./img/icons/instagram.svg" alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src="./img/icons/twitter.svg" alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src="./img/icons/gitHub.svg" alt="Link" />
                </a>
              </li>
              <li className="social__item">
                <a href="#!">
                  <img src="./img/icons/linkedIn.svg" alt="Link" />
                </a>
              </li>
            </ul>
            <div className="copyright">
              <p>© 2022 frontend-dev.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
