import React, { FC } from 'react';

import MainProjects from '../components/mainProjects/MainProjects';
import { IMainProjectsData } from '../components/mainProjects/MockData';
import Projected from '../components/projected/Projected';

const Projects:FC = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {IMainProjectsData.map((items) => {
            return <Projected />;
          })}
        </ul>
      </div>
    </main>
  );
}

export default Projects