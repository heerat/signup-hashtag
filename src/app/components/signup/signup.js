import React, { useState } from "react";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./signup.css";

export const Singup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Singup">
      <Form onSubmit={handleSubmit}>
        <Form.Group  size="lg" controlId="firstname">
          <Form.Label >First name * </Form.Label>
          <Form.Control
            className="box"
            autoFocus
            value={email}
            placeholder= "first name"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group  size="lg" controlId="lastname">
          <Form.Label>Last name *</Form.Label>
          <Form.Control
           className="box"
            autoFocus
            value={email}
            placeholder= "last name"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group  size="lg" controlId="username">
          <Form.Label>Username *</Form.Label>
          <Form.Control
           className="box"
            autoFocus
            type="email"
            value={email}
            placeholder= "username"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group  size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
           className="box"
            autoFocus
            type="email"
            value={email}
            placeholder= "email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group  size="lg" controlId="timezone">
          <Form.Label>Timezone *</Form.Label>
          <Form.Control
           className="box"
            autoFocus
            type="email"
            value={email}
            placeholder= "timezone"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password *</Form.Label>
          <Form.Control
           className="box"
            type="password"
            value={password}
            placeholder= "password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
        Singup
        </Button>
      </Form>
    </div>
  );
}