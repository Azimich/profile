import React, { FC } from 'react'
import { Params, useParams } from 'react-router-dom';


import img from "../assets/projects/02-big.jpg";
import ButtonGitHub from '../components/buttonGit/ButtonGitHub';
import { IMainProjects } from '../components/mainProjects/MainProjects';
import { IMainProjectsData } from '../components/mainProjects/MockData';
import { projects } from '../helpers/ProjectList';

const Project = () => {
  
  const { id } = useParams();
  const project = projects[id];
  console.log(pro);

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">Video service</h1>
          <img src={img} alt="" className="project-details__cover" />
          <div className="project-details__desc">
            <p>Skills: React, Node.js, MongoDB</p>
          </div>
          <ButtonGitHub />
        </div>
      </div>
    </main>
  );
};

export default Project