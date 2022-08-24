/* eslint-disable*/

import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "./redux/auth/action";

const Login = ({ dispatch, status, token }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const submitLogin = () => {
    dispatch(loginUser(user));
  };

  const handleChange = (value, field) => {
    const temp = user;
    temp[field] = value;
    setUser({ ...temp });
  };

  const cancelLogin = () => {
    const temp = user;
    temp["email"] = "";
    temp["password"] = "";

    setUser({ ...temp });
  };

  return (
    <div>
      <h3>Login</h3>

      <div>
        <p>Please use following credentilas</p>
        email : eve.holt@reqres.in, password: cityslicka
      </div>
      <br />
      <input
        type="text"
        value={user.email}
        placeholder="Email"
        onChange={(e) => handleChange(e.target.value, "email")}
      />
      <input
        type="password"
        value={user.password}
        placeholder="Password"
        onChange={(e) => handleChange(e.target.value, "password")}
      />
      <button onClick={submitLogin}>SUBMIT</button>
      <button onClick={cancelLogin}>CANCEL</button>

      <div>
        <p style={{ color: "green" }}>
          {status === "PENDING" ? "Please wait ..." : ""}
        </p>
        <p style={{ color: "red" }}>
          {status === "ERROR" ? "Login Failed" : ""}
        </p>
        <p style={{ color: "green" }}>
          {status === "SUCCESS" ? "Login successful" : ""}
        </p>
      </div>
      <div>
        <p>{token.length ? "Token = " + token : ""}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    status: state.login.status,
    token: state.login.token,
  };
};

export default connect(
  mapStateToProps,
  null // Generaly its the place of mapStateToDispatch
)(Login);
