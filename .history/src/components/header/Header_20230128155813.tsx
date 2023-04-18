import React, { FC } from 'react';
import Button from '../button/Button';

import "./Header.css";


export interface IHeader {
  id: number;
  title: string;
  name: string;
  post: string;
  subpost: string;
}

const Header: FC<IHeader> = ({ title, name, post, subpost }) => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            {title} <em>{name}</em>
          </strong>
          <br />
          {post}
        </h1>
        <div className="header__text">
          <p>{subpost}</p>
        </div>
        <Button />
      </div>
    </header>
  );
};

export default Header;
