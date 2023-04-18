import React, { FC } from 'react'

import { IMainProjects } from '../mainProjects/MainProjects';
import gitHub from '../assets/icons/gitHub-black.svg';
import { IMainProjectsData } from '../mainProjects/MockData';


const BigProject: FC<IMainProjects> = () => {
  return (
    <main className="section">
      <div className="container">
        {IMainProjectsData.map(items => {
          return (
            <div  className="project-details">
              <h1 className="title-1">Video service</h1>
              <img src="./img/projects/02-big.jpg" alt="" className="project-details__cover" />
              <div className="project-details__desc">
                <p>Skills: React, Node.js, MongoDB</p>
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