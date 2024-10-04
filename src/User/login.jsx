import React from "react";
import Form from "react-bootstrap/Form";

const Login = () => {
  return (
    <>
      <Form>
        <h1>Login</h1>
        Name :
        <input type="text" />
        <br />
        <br />
        Password :
        <input type="password" />
        <br />
        <br />
        <button>Login</button>
      </Form>
    </>
  );
};

export default Login;
