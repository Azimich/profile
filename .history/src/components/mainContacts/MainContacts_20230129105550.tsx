import React, { FC } from 'react'

import './MainContacts.css';
import { IMainContactsData } from './MockData';

export interface IMainContacts {
  id?: number;
  title?: string;
  subtitle?: string;
}

const MainContacts: FC<IMainContacts> = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>
        <ul className="content-list">
          {IMainContactsData.map(items => {
           return
          })}
        </ul>
      </div>
    </main>
  );
};

export default MainContacts;