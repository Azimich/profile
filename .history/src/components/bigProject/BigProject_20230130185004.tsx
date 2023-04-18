import React, { FC } from 'react'

import { IMainProjects } from '../mainProjects/MainProjects';
import gitHub from '../../';
import { IMainProjectsData } from '../mainProjects/MockData';


const BigProject: FC<IMainProjects> = () => {
  return (
    <main className="section">
      <div className="container">
        {IMainProjectsData.map(items => {
          return (
            <div key={items.id} className="project-details">
              <h1 className="title-1">{items.title}</h1>
              <img src={items.imgBig} alt={items.title} className="project-details__cover" />
              <div className="project-details__desc">
                <p>{items.desc}</p>
              </div>
              <a href="#!" className="btn-outline">
                <img src={gitHub} alt="" />
                GitHub repo
              </a>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default BigProject