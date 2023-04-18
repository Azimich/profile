import React from 'react'
import Header from '../components/header/Header';
import { HeaderData } from '../components/header/MockData';
import Main from '../components/mainHome/Main';

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