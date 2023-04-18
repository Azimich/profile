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
              <li key={items.} className="content-list__item">
                <h2 className="title-2">{items.title}</h2>
                <p>{items.subtitle}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Main