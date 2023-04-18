import React, { FC } from 'react'

import "./Footer.css";
import { FooterData } from './MockData';

export interface IFooter {
  id: number;
  title: string;
  img: string;
}

const Footer: FC<IFooter> = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            {FooterData.map((items => {
              return (
                <li className="social__item">
                  <a href="#!">
                    <img src={items} alt="Link" />
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="copyright">
            <p>© 2022 frontend-dev.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer