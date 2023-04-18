import React, { FC } from 'react'
import {useParams } from 'react-router-dom';

import img from "../assets/projects/02-big.jpg";
import ButtonGitHub from '../components/buttonGit/ButtonGitHub';
import { IMainProjectsData } from '../components/mainProjects/MockData';

const Project = () => {
  
  const { id } = useParams();
  const project = IMainProjectsData[id];
  console.log(project);

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{IMainProjectsData.title}</h1>
          <img src={img} alt="" className="project-details__cover" />
          <div className="project-details__desc">
            <p>{IMainProjectsData.desc}</p>
          </div>
          <ButtonGitHub />
        </div>
      </div>
    </main>
  );
};

export default Project