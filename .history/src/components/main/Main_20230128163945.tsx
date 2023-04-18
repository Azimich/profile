import React, { FC } from 'react'

import "./Main.css";

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
          {IMainData}
          <li className="content-list__item">
            <h2 className="title-2">Frontend</h2>
            <p>
              JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM, BootStrap,
              MaterialUI, Yarn, TailwindCSS, StyledComponents
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Main