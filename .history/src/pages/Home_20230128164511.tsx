import React from 'react'
import { HeaderData } from '../components/header/MockData';
import Main from '../components/main/Main';

const Home = () => {
  return (
    <>
      {HeaderData.map((props) => {
        return <Header key={props.id} {...props} />;
      })}
      <Main />
    </>
  );
}

export default Home;