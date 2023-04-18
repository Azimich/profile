import React, { FC, LiHTMLAttributes } from 'react'

import './MainProjects.css';
import { IMainProjectsData } from './MockData';

export interface IMainProjects {
  id?: number;
  title?: string;
  desc?: string;
  img?: string;
  imgBig?: string;
  index?: DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>;
}

const MainProjects: FC<IMainProjects> = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {IMainProjectsData.map((items, index) => {
            return (
              <li key={items.title} index={index} className="project">
                <a href="./project-page.html">HTMLLIElemen
                  <img src={items.img} alt={items.title} className="project__img" />
                  <h3 className="project__title">{items.title}</h3>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default MainProjects;