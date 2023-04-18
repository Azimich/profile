import React, { FC } from 'react'
import { NavLink } from 'react-router-dom';


import './MainProjects.css';


export interface IMainProjects {
  id?: number;
  title?: string;
  desc?: string;
  img?: string;
  imgBig?: string;
  index?: any;
}

const MainProjects: FC<IMainProjects> = ({ img, title, index }) => {
  return (
    <NavLink>

    </NavLink>
  
  );
};

export default MainProjects;