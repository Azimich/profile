import React, { FC } from 'react';

import { IMainProjectsData } from '../components/mainProjects/MockData';
import Project from '../components/project/Projects';


const Projects:FC = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {IMainProjectsData.map((props) => {
            return(
              <Project key={props.id} {...props} />
            )
          })}
        </ul>
      </div>
    </main>
  );}

export default Projects