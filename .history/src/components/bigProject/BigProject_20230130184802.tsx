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

          )
        })}
        
      </div>
    </main>
  );
};

export default BigProject