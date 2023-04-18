import React, {FC} from 'react'

import gitHub from '../../assets/icons/gitHub-black.svg';

const ButtonGitHub: FC<IButton> = () => {
  return (
    <a href="#!" className="btn-outline">
      <img src={gitHub} alt="" />
    </a>
  );
};

export default ButtonGitHub