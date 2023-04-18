import React, { FC } from 'react'
import { Link } from 'react-router-dom';

const Button:FC = () => {
  return (
    <Link to={'/'}>
      <a href="#!" className="btn">
        Download CV
      </a>
    </Link>
  );
}

export default Button