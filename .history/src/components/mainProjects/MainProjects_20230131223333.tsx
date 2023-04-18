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

const MainProjects: FC<IMainProjects> = ({ img, title, i }) => {
  return (
    <li className="project">
      <a href="./project-page.html">
        <img src={img} alt={title} className="project__img" />
        {index}
        <h3 className="project__title">{title}</h3>
      </a>
    </li>
  );
};

export default MainProjects;