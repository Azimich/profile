import React, { FC } from 'react'
import { NavLink } from 'react-router-dom';


import './MainProjects.css';


export interface IMainProjects {
  id?: number;
  title?: string;
  desc?: string;
  img?: string;
  imgBig?: string;
  index?: any;
}

const MainProjects: FC<IMainProjects> = ({ img, title, index }) => {
  return (
    <NavLink to={`/project/`}>
      <li className="project">
        <a href="./project-page.html">
          <img src={img} alt={title} className="project__img" />
          {index}
          <h3 className="project__title">{title}</h3>
        </a>
      </li>
    </NavLink>
  );
};

export default MainProjects;