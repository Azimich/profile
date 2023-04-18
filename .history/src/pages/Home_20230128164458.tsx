import React from 'react'

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