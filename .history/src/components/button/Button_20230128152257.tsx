import React from 'react'
import { Link } from 'react-router-dom';

const Button = () => {
  return (
    <Link to={''}>
      <a href="#!" className="btn">
        Download CV
      </a>
    </Link>
  );
}

export default Button