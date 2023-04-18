import React, { FC } from 'react'

import './MainProjects.css';


export interface IMainProjects {
  id?: number;
  title?: string;
  desc?: string;
  img?: string;
  imgBig?: string;
  index?: any;
}

const MainProjects: FC<IMainProjects> = ({ img, title }) => {
  return (
    <li className="project">
      <a href="./project-page.html">
        <img src={img} alt={title} className="project__img" />
        <h3 className="project__title">{desc}</h3>
      </a>
    </li>
  );
};

export default MainProjects;