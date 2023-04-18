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

const MainProjects: FC<IMainProjects> = ({img}) => {
  return (
    <li className="project">
      <a href="./project-page.html">
        HTMLLIElemen
        <img src={items.img} alt={items.title} className="project__img" />
        <h3 className="project__title">{items.title}</h3>
      </a>
    </li>
  );
};

export default MainProjects;