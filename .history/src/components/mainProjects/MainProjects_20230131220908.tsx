import React, { DetailedHTMLProps, FC, LiHTMLAttributes } from 'react'

import './MainProjects.css';
import { IMainProjectsData } from './MockData';

export interface IMainProjects {
  id?: number;
  title?: string;
  desc?: string;
  img?: string;
  imgBig?: string;
  index?: ;
}

const MainProjects: FC<IMainProjects> = () => {
  return (
    <>
    {IMainProjectsData.map((items, index) => {
            return (
              <li key={items.title} index={index} className="project">
                <a href="./project-page.html">
                  HTMLLIElemen
                  <img src={items.img} alt={items.title} className="project__img" />
                  <h3 className="project__title">{items.title}</h3>
                </a>
              </li>
            );
          })}
    </>
  );
};

export default MainProjects;