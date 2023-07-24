import React from "react";
import { Button } from "react-bootstrap";

const Login = () => {
  const handleLogin = () => {
    // Tambahkan logika login di sini
    console.log("Melakukan login...");
  };

  return (
    <div className="login">
      <h2>Silakan login terlebih dahulu</h2>
      <Button variant="primary" onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
};

export default Login;
