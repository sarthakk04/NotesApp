import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const nav = useNavigate();
  function gotoLogin() {
    nav("/");
  }

  const postdata = (e) => {
    try {
      axios.post(`http://localhost:8000/bregister`, {
        name: name,
        email: email,
        password: password,
      });
      alert("Posted");
    } catch (error) {
      alert("Error");
      console.log(error);
    }
  };
  return (
    <>
      <Form onSubmit={postdata}>
        <h1>SignUp</h1>
        <br />
        <br />
        Name :
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        Email :
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        Password :
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </Form>
    </>
  );
};

export default Signup;
