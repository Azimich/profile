import React, { FC } from 'react'
import { NavLink } from 'react-router-dom';

import { INavData } from './Mockdata';
import "./Navbar.css";


export interface INavbar {
  id?: number;
  img?: string;
  title?: string;
  link?: string;
  name?: string;
}

const Navbar: FC<INavbar> = () => {

  const activeLink = 'nav-list__link nav-list__link--active';
  const normLink = 'nav-list__link';

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to={'/'} className="logo">
            <strong>Front-end</strong>
          </NavLink>
          <BtnDarkMode

          <ul className="nav-list">
            {INavData.map((links) => {
              return (
                <li key={links.id} className="nav-list__item">
                  <NavLink
                    to={"" + links.link}
                    className={({ isActive }) => (isActive ? activeLink : normLink)}>
                    {links.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;