import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Col, Row, Button, FormGroup, Input } from "reactstrap";
import axios from "axios";
import "./Registration.css"; // Import the CSS file

const initialUser = { email: "", password: "", username: "" };

const Registration = () => {
  const [user, setUser] = useState(initialUser);
  const [validationErrors, setValidationErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};

    if (!user.username.trim()) {
      errors.username = "Username is required.";
    }

    if (!user.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      errors.email = "Enter a valid email address.";
    }

    if (!user.password.trim()) {
      errors.password = "Password is required.";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const signUp = async () => {
    try {
      if (validateForm()) {
        const url = `http://localhost:1337/api/auth/local/register`;
        const res = await axios.post(url, user);

        if (res) {
          toast.success("Registered successfully!", {
            hideProgressBar: true,
          });
          setUser(initialUser);
          navigate("/login");
        }
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };

  const handleUserChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
    setValidationErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  return (
    <Row className="register">
      <Col sm="12" md={{ size: 4, offset: 4 }}>
        <div>
          <h2>Sign up:</h2>
          <FormGroup className="form-group">
            <Input
              type="text"
              name="username"
              value={user.username}
              onChange={handleUserChange}
              placeholder="Enter your full name"
            />
            {validationErrors.username && (
              <span className="error-message">{validationErrors.username}</span>
            )}
          </FormGroup>
          <FormGroup className="form-group">
            <Input
              type="email"
              name="email"
              value={user.email}
              onChange={handleUserChange}
              placeholder="Enter your email"
            />
            {validationErrors.email && (
              <span className="error-message">{validationErrors.email}</span>
            )}
          </FormGroup>
          <FormGroup className="form-group">
            <Input
              type="password"
              name="password"
              value={user.password}
              onChange={handleUserChange}
              placeholder="Enter password"
            />
            {validationErrors.password && (
              <span className="error-message">{validationErrors.password}</span>
            )}
          </FormGroup>
          <Button color="primary" onClick={signUp}>
            Sign up
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default Registration;
