import React, { FC } from 'react'

import "./Footer.css";
import { FooterData } from './MockData';

export interface IFooter {

}

const Footer:FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            {FooterData.map(items)}
            <li className="social__item">
              <a href="#!">
                <img src="./img/icons/vk.svg" alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2022 frontend-dev.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer