import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { backendURL } from "../../utils";

const Registration = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameChangeHandler = ({ target: { value } }) => setName(value);
  const emailChangeHandler = ({ target: { value } }) => setEmail(value);
  const passwordChangeHandler = ({ target: { value } }) => setPassword(value);

  const submitHandler = async ({ preventDefault }) => {
    const postEndpoint = `${backendURL}/register`;
    const fetchParams = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    };
    const response = await fetch(postEndpoint, fetchParams);
    // eslint-disable-next-line no-console
    console.log(response);
    history.push("/courses");
    preventDefault();
  };

  return (
    <>
      <div id="registrationTitle">Registration</div>
      <div id="nameTitle">Name</div>
      <input
        type="text"
        id="nameField"
        onChange={(e) => nameChangeHandler(e)}
        value={name}
        placeholder="Enter name"
      />
      <div id="emailTitle">Email</div>
      <input
        type="text"
        id="emailField"
        onChange={(e) => emailChangeHandler(e)}
        value={email}
        placeholder="Enter email"
      />
      <div id="passwordTitle">Password</div>
      <input
        type="password"
        id="passwordField"
        onChange={(e) => passwordChangeHandler(e)}
        value={password}
        placeholder="Enter password"
      />
      <input
        type="submit"
        value="Register"
        onSubmit={(e) => submitHandler(e)}
      />
      <div id="registrationMessageContainer">
        <span id="registrationMessage">If you have an account you can </span>
        <input
          type="button"
          id="loginLink"
          onMouseDown={() => history.push("/login")}
          value="Login"
        />
      </div>
    </>
  );
};
export default Registration;
