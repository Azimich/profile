import React, { FC, useState } from 'react'

import { INavData } from '../navbar/Mockdata';
import { INavbar } from '../navbar/Navbar';
import "./BtnDarkMode.css"


const BtnDarkMode: FC <INavbar> = () => {

  const [darkMode, setDarkMode] = useState('light');

  const handleToggleDarkMode = () => {
    console.log('handleToggleDarkMode');
    setDarkMode('dark')
  }

  return (
    <>
      <button className="dark-mode-btn" onClick={handleToggleDarkMode}>
        {INavData.map((items) => {
          return (
            <img src={items.img} alt={items.name} key={items.id} className="dark-mode-btn__icon" />
          );
        })}
      </button>
    </>
  );
};

export default BtnDarkMode