import React, { FC } from 'react';

import MainProjects from '../components/mainProjects/MainProjects';
import { IMainProjectsData } from '../components/mainProjects/MockData';

const Projects:FC = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {IMainProjectsData.map((item, index) => {
            return (
              <MainProjects 
                id={item.id} 
                desc={} 
                img={''} 
              />
            )
          })}
        </ul>
      </div>
    </main>
  );
}

export default Projects