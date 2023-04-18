import React, { DetailedHTMLProps, FC, LiHTMLAttributes } from 'react'

import './MainProjects.css';
import { IMainProjectsData } from './MockData';

export interface IMainProjects {
  id?: number;
  title?: string;
  desc?: string;
  img?: string;
  imgBig?: string;
  index?: ;
}

const MainProjects: FC<IMainProjects> = () => {
  return (
    <>
    </>
  );
};

export default MainProjects;