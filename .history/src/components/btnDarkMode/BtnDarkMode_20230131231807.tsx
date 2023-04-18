import React, { FC, useEffect, useRef, useState } from 'react'

import { INavData } from '../navbar/Mockdata';
import { INavbar } from '../navbar/Navbar';
import "./BtnDarkMode.css"


const BtnDarkMode: FC <INavbar> = () => {

  const [darkMode, setDarkMode] = useState('light');
  const btnRef = useRef(<null>)

  useEffect(() => {
    if (darkMode === 'dark') {
      document.body.classList.add('dark')
      btnRef.current.classList.add('dark-mode-btn--active');
    } else {
      document.body.classList.remove('dark');
      btnRef.current.classList.remove('dark-mode-btn--active');
    }
  }, [darkMode]);

  const handleToggleDarkMode = () => {
    console.log('handleToggleDarkMode');
    setDarkMode((currentValue) => {
      return currentValue === 'light' ? 'dark' : 'light'
    })
  }

  return (
    <>
      {darkMode}
      <button ref={btnRef} className="dark-mode-btn" onClick={handleToggleDarkMode}>
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