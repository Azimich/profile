import React, { FC } from 'react'

import './MainProjects.css';


export interface IMainProjects {
  id?: number;
  title?: string;
  desc?: string;
  img?: string;
  imgBig?: string;
  index?: HTMLA
}

const MainProjects: FC<IMainProjects> = ({ img, desc }) => {
  return (
    <li className="project">
      <a href="./project-page.html">
        <img src={img} alt={desc} className="project__img" />
        <h3 className="project__title">{desc}</h3>
      </a>
    </li>
  );
};

export default MainProjects;