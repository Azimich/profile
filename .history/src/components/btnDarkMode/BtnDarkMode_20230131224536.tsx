import React, { FC } from 'react'

import { INavData } from '../navbar/Mockdata';


const BtnDarkMode: FC = () => {
  return (
    <button className="dark-mode-btn">
      {INavData.map((items) => {
        return (
          <img src={items.img} alt={items.name} key={items.id} className="dark-mode-btn__icon" />
        );
      })}
    </button>
  );
}

export default BtnDarkMode