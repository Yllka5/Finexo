import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import styled from "@emotion/styled";
import { Container, Button, TextField, Typography } from "@mui/material";

const RegisterWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;

  form {
    max-width: 400px;
    width: 100%;
    padding: 30px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  .MuiTextField-root {
    margin-bottom: 20px;
  }

  .MuiButton-root {
    margin-top: 10px;
  }
`;

const Register = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Fjalëkalimet nuk përputhen!"); 
      return;
    }

    const success = onRegister(formData);

    if (success) {
      navigate("/login"); 
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <RegisterWrapper>
      <Container>
        <form onSubmit={handleSubmit}>
          <Typography variant="h5" component="h1" gutterBottom>
            Sign Up
          </Typography>
          <TextField
            label="First name"
            name="firstName"
            variant="outlined"
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Last name"
            name="lastName"
            variant="outlined"
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Confirm password"
            name="confirmPassword"
            type="password"
            variant="outlined"
            value={formData.confirmPassword}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Phone number"
            name="phoneNumber"
            type="tel"
            variant="outlined"
            value={formData.phoneNumber}
            onChange={handleChange}
            fullWidth
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign up
          </Button>
        </form>
      </Container>
    </RegisterWrapper>
  );
};

export default Register;
