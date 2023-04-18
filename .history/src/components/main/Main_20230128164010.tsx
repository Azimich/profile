import React, { FC } from 'react'

import "./Main.css";
import { IMainData } from './MockData';

export interface IMain {
  id?: number;
  title?: string;
  subtitle?: string;
}

const Main: FC<IMain> = () => {
  return (
    <main className="section">
      <div className="container">
        <ul className="content-list">
          {IMainData.map(items => {
            return (

            )
          })}
        </ul>
      </div>
    </main>
  );
};

export default Main