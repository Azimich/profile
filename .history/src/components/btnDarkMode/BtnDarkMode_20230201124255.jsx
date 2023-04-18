import React, { useEffect, useRef } from 'react'

import { INavData } from '../navbar/Mockdata';
import { useLocalStorage } from "../../utils/useLocalStorage";
import { detectDarkMode } from "../../utils/detectDarkMode";
import "./BtnDarkMode.css"


const BtnDarkMode = () => {

 	const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());
	const btnRef = useRef(null)

  useEffect(() => {
    if (darkMode === 'dark') {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
	}, [darkMode]);

  useEffect(() => {
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', (event) => {
				const newColorScheme = event.matches ? 'dark' : 'light';
				setDarkMode(newColorScheme);
			});
	}, [setDarkMode]);

	const handleToggleDarkMode = () => {
		setDarkMode((currentValue) => {
			return currentValue === 'light' ? 'dark' : 'light';
		});
	};

	const normaBtn = 'dark-mode-btn';
	const activeBtn = 'dark-mode-btn--active';

  return (
    <button 
			ref={btnRef} 
			className={darkMode === 'dark' ? activeBtn : normaBtn} 
			onClick={handleToggleDarkMode}
		>
      {INavData.map((items) => {
        return (
          <img src={items.img} alt={items.name} key={items.id} className="dark-mode-btn__icon" />
        )
      })}
    </button>
  );
};

export default BtnDarkMode