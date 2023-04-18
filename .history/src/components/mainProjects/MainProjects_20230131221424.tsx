import React, { DetailedHTMLProps, FC, LiHTMLAttributes } from 'react'

import './MainProjects.css';
import { IMainProjectsData } from './MockData';

export interface IMainProjects {
  id: number;
  titl?: string;
  desc: string;
  img: string;
  imgBig?: string;
}

const MainProjects: FC<IMainProjects> = ({ img, title }) => {
  return (
    <li className="project">
      <a href="./project-page.html">
        HTMLLIElemen
        <img src={img} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
      </a>
    </li>
  );
};

export default MainProjects;