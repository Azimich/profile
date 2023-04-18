import React, { FC } from 'react'

import { IMainProjects } from '../mainProjects/MainProjects';
import gitHub from '../../assets/icons/gitHub-black.svg';
import { IMainProjectsData } from '../mainProjects/MockData';
import Button from '../button/Button';


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

              <Button children={'GitHub repo'} className="btn-outline">
                  <img src={gitHub} alt="" />
                </a>
              </Button>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default BigProject