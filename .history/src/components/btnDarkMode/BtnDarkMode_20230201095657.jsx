import React, { useEffect, useRef } from 'react'

import { INavData } from '../navbar/Mockdata';
import { useLocalStorage } from ""
import "./BtnDarkMode.css"



const BtnDarkMode = () => {

 const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());

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

	const toggleDarkMode = () => {
		setDarkMode((currentValue) => {
			return currentValue === 'light' ? 'dark' : 'light';
		});
	};

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