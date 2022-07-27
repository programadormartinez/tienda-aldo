import { Button, Container } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useAuth } from "../../context/AuthController";
import "./Login.css";
const Login = () => {
    const [user, setUser] = useState({
      email: '',
      password: '',
    });
    const { error, login } = useAuth();
    const [errorMessages, setErrorMessages] = useState({});
    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
    );
    const errors = {
      email: "invalid username",
      password: "invalid password"
    };
    const handleSubmit  = (event) => {
      login(user.email, user.password);
      event.preventDefault();
    }

    const handleChange = ({ target: { name, value } }) => {
      setUser({ ...user, [name]: value });
    };
    const renderForm = (
        <div className="form">
          <h1>ENTRAR A MI CUENTA</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Email </label>
              <input type="text" name="email" placeholder="youremail@company.com" required  onChange={handleChange}/>
              {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="password" placeholder="**************" required  onChange={handleChange}/>
              {renderErrorMessage("pass")}
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>

          <Button>
                <Link to={'/register'}>
                Registrarse</Link>
          </Button>
        </div>
     );

   
    return <div>
        <Navbar></Navbar>
        <Container maxWidth="">
            {renderForm}
        </Container>
    </div>;
};

export default Login;
