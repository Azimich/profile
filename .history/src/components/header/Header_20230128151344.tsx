import React, { FC } from 'react';

import "./Header.css";


export interface IHeader {
  id: number;
  title: string;
  name: string;
  post: string;
  subpost: string;
}

const Header: FC<IHeader> = (props) => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            {props.} <em>{}</em>
          </strong>
          <br />
          {}
        </h1>
        <div className="header__text">
          <p>{}</p>
        </div>
        <a href="#!" className="btn">
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
