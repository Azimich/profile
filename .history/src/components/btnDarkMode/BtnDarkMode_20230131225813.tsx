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
    
    </>

  );
};

export default BtnDarkMode