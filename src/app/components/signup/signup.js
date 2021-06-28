import React, { useState } from "react";
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./signup.css";
import axios from 'axios'

export const Singup = ({type}) => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [timezone, setTimeZone] = useState("");
    const [password, setPassword] = useState("");

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  }

  const handleSubmit = async(event) => {
    const saveFan = await axios.post("http://134.209.148.76:2000/api/v3/sign-up/"+`${type}` ,
                    {
                        first_name: fname,
                        last_name: lname,
                        username: username,
                        email: email,
                        password: timezone,
                        timezone: password,
                        captcha: true
                    }
  ).then(res=>res.data.results.token)
  console.log(saveFan)
    event.preventDefault();
  }

  return (
    <div className="sign-container">
       <span className="title"> Create your {type} account</span>
      <Form onSubmit={handleSubmit}>
        <div className="form-wrapper">
        <Form.Group  size="sm" controlId="firstname">
          <Form.Label >First name * </Form.Label>
          <Form.Control
            className="box"
            autoFocus
            value={fname}
            placeholder= "first name"
            onChange={(e) => setFname(e.target.value)}
          />
        </Form.Group>
        <Form.Group  size="sm" controlId="lastname">
          <Form.Label>Last name *</Form.Label>
          <Form.Control
           className="box"
            autoFocus
            value={lname}
            placeholder= "last name"
            onChange={(e) => setLname(e.target.value)}
          />
        </Form.Group>
        <Form.Group  size="sm" controlId="username">
          <Form.Label>Username *</Form.Label>
          <Form.Control
           className="box"
            autoFocus
            value={username}
            placeholder= "username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group  size="sm" controlId="email">
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
        <Form.Group  size="sm" controlId="timezone">
          <Form.Label>Timezone *</Form.Label>
          <Form.Control
           className="box"
            autoFocus
            value={timezone}
            placeholder= "timezone"
            onChange={(e) => setTimeZone(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="sm" controlId="password">
          <Form.Label>Password *</Form.Label>
          <Form.Control
           className="box"
            type="password"
            value={password}
            placeholder= "password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        </div>
        <div className="buttom-wrapper">
        <Button className="button" block size="sm" type="submit" disabled={!validateForm()}>
        SIGN UP
        </Button>
        </div>
      </Form>
    </div>
  );
}