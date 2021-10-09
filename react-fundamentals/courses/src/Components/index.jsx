import React from 'react';
import { Redirect } from 'react-router-dom';

const Home = () => {
  const userToken = (async () => {
    const userTokenLoaded = await JSON.parse(localStorage.getItem('userToken'));
    return userTokenLoaded;
  })();

  return userToken ? <Redirect to="/courses/" /> : <Redirect to="/login" />;
};

export default Home;
