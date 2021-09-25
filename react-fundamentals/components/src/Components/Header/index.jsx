import React from 'react';
import './index.module.css';

const username = '';
const logoutFunction = () => {};

const Logo = () => <>Courses</>;
const Username = () => <>{username}</>;
const LogoutButton = () => (
  <button onClick={logoutFunction} type="button">
    Logout
  </button>
);

export default () => (
  <header id="box">
    <Logo />
    <Username />
    <LogoutButton />
  </header>
);
