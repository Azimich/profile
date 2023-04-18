import React, { FC } from 'react'

import './MainContacts.css';
import { IMainData } from './MockData';

export interface IMainContacts {
  id?: number;
  title?: string;
  subtitle?: string;
}

const IMainContacts: FC<IMainContacts> = () => {
  return (
    <main className="section">
      <div className="container">
        <ul className="content-list">
          {IMainData.map((items) => {
            return (
              <li key={items.id} className="content-list__item">
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

export default MainHome;