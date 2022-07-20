import { Container } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import "./Login.css";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
    );
    const errors = {
      uname: "invalid username",
      pass: "invalid password"
    };

    const renderForm = (
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Username </label>
              <input type="text" name="uname" required />
              {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" required />
              {renderErrorMessage("pass")}
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
     );

    const handleSubmit  = (event) => {

      if (userData) {
        if (userData.password !== pass.value) {
          // Invalid password
          setErrorMessages({ name: "pass", message: errors.pass });
        } else {
          setIsSubmitted(true);
        }
      } else {
        // Username not found
        setErrorMessages({ name: "uname", message: errors.uname });
      }
        event.preventDefault();
    }
    return <div>
        <Navbar></Navbar>
        <Container maxWidth="">
            {renderForm}
        </Container>
    </div>;
};

export default Login;
