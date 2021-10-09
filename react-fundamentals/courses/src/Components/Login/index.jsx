import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { backendURL } from '../../utils';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailChangeHandler = ({ target: { value } }) => setEmail(value);
  const passwordChangeHandler = ({ target: { value } }) => setPassword(value);
  const [loginErrorMessage, setLoginErrorMessage] = useState('');
  const submitHandler = async ({ preventDefault }) => {
    const postEndpoint = `${backendURL}/login`;
    const fetchParams = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    };
    const responseObject = await fetch(postEndpoint, fetchParams);
    // eslint-disable-next-line no-console
    const userToken = (async () => {
      const response = await JSON.parse(responseObject.json);
      const success = response?.successful;
      if (success === true) {
        setLoginErrorMessage('');
        localStorage.setItem(JSON.stringify(response?.result));
        history.push('/courses');
      }
      setLoginErrorMessage(response?.result);
    })();
    setLoginErrorMessage(true);
    preventDefault();
  };

  const LoginErrorMessage = () => (
    <div id="loginErrorMessage">
      <div>Login unsuccessful, please try again</div>
      <div>`&quot;{loginErrorMessage}&quot;</div>
    </div>
  );
  return (
    <>
      {loginErrorMessage && LoginErrorMessage}
      <div id="loginTitle">Login</div>
      <div id="emailTitle">Email</div>
      <input
        type="text"
        id="emailField"
        onChange={(e) => emailChangeHandler(e)}
        value={email}
        placeholder="Enter email"
      />
      <div id="emailTitle">Password</div>
      <input
        type="password"
        id="passwordField"
        onSubmit={(e) => passwordChangeHandler(e)}
        value={password}
        placeholder="Enter password"
      />
      <input type="submit" value="Login" onMouseDown={(e) => submitHandler(e)} />
      <div id="registrationMessageContainer">
        <span id="registrationMessage">If you do not have an account you can </span>
        <input
          type="button"
          id="registrationLink"
          onMouseDown={() => history.push('/registration')}
          value="Register"
        />
      </div>
    </>
  );
};
export default Login;
