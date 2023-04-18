import React, { FC } from 'react'
import { Link } from 'react-router-dom';

import "./Button.css";

interface IButton {
  children?: string | React.ReactElement | React.ReactNode;
  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
  onClick?: (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  size?: 'large' | 'medium' | 'small' | 'max' | 'context';
  theme?: 'banner' | 'news' | 'industries';
  color?: 'white' | 'green' | 'link';
  link?: string;
}

const Button: FC <IButton> = ({ children }) => {
  return (
    <a href="#" className="btn">
      {children}
    </a>
  );
};

export default Button