import React, { useState } from "react";
import { TextField, Button, Container, Box, Typography } from "@mui/material";
import axios from "axios";
export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/api/auth/login", {
        email: email,
        password: password,
        token: localStorage.getItem("token"),
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.token);
      })
      .catch((error) => {
        console.log(error);
      });
    setEmail("");
    setPassword("");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box className={Container}>
        <Typography variant="h5">Sign In</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            className={TextField}
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            sx={{ m: 1, width: "25ch" }}
          />
          <TextField
            className={TextField}
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            sx={{ m: 1, width: "25ch" }}
          />
          <Button
            className={Button}
            variant="contained"
            color="primary"
            type="submit"
          >
            Sign In
          </Button>
        </form>
      </Box>
    </Container>
  );
}
