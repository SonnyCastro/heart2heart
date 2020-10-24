import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Form, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const { setCurrentUser } = useContext(AppContext);
  const { history } = useHistory();
  const [data, setData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/users/login", data)
      .then(({ data }) => {
        sessionStorage.setItem("user", data);
        setCurrentUser(data);
        if (data) {
          history.push("/account");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong! Try again.");
      });
  };

  return (
    <>
      <h1>Login</h1>
      <Form
        onSubmit={handleSubmit}
        className="mt-3"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <Form.Group controlId="loginEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            type="email"
            name="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="loginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Text className="text-right">
          Need an account? Register with us <Link to="/register">here</Link>
        </Form.Text>

        <Button className="mt-3" variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </>
  );
};

export default Login;
