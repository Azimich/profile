import React, {FC} from 'react'

import gitHub from '../../assets/icons/gitHub-black.svg';
import { IButton } from '../button/Button';
import "./Style.css"

const ButtonGitHub: FC<IButton> = ({link}) => {
  return (
    <a href="#!" className="btn-outline">
      <img src={gitHub} alt="git" />
      GitHub repo
    </a>
  );
};

export default ButtonGitHub