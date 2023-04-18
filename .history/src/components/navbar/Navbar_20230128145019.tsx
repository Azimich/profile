import React, { FC } from 'react'

import { INavData } from './Mockdata';
import "./Navbar.css";


export interface INavbar {
  id?: number;
  img?: string;
  title?: string;
  link?: string;
}

const Navbar: FC<INavbar> = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <a href="./index.html" className="logo">
            <strong>Freelancer</strong> portfolio
          </a>
          <button className="dark-mode-btn">
            {INavData.map((items) => {
              return (
                <img
                  src={items.img}
                  alt={items.title}
                  key={items.id}
                  className="dark-mode-btn__icon"
                />
              );
            })}
          </button>

          <ul className="nav-list">
            {INavData.map(links => lint)}
            <li className="nav-list__item">
              <a href="./index.html" className="nav-list__link nav-list__link--active">
                Home
              </a>
            </li>
            <li className="nav-list__item">
              <a href="./projects.html" className="nav-list__link">
                Projects
              </a>
            </li>
            <li className="nav-list__item">
              <a href="./contacts.html" className="nav-list__link">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;