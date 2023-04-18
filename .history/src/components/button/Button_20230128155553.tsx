import React, { FC } from 'react'
import { Link } from 'react-router-dom';

import "./Button.css";

interface IButton {
  
}

const Button: FC = ({children}) => {
  return (
    <Link to={'/'} className="btn">
      {children}
    </Link>
  );
};

export default Button