import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Bar from "../../components/Bar";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
`;

const Input = styled(Field)`
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

const Error = styled(ErrorMessage)`
  color: red;
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;

const SubmitButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: none;
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <div>
      {loggedInUser ? (
        // Jika pengguna telah login, tampilkan komponen Profile dengan data pengguna
        <Bar user={loggedInUser} />
      ) : (
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            axios
              .post("https://mern-project-api-gamma.vercel.app/login", values) // Mengirim permintaan login ke endpoint '/login' di backend
              .then((response) => {
                alert("Login berhasil!");
                navigate("/");
              })
              .catch((error) => {
                console.log(error);
                // Handle error case, e.g., show error message to user
              })
              .finally(() => {
                setSubmitting(false);
              });
          }}
        >
          {({ isSubmitting }) => (
            <FormWrapper style={{ paddingTop: "100px", width: "80%" }}>
              <h1 style={{ textAlign: "center" }}>Login</h1>
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input type="email" name="email" />
                <Error name="email" />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input type="password" name="password" />
                <Error name="password" />
              </FormGroup>

              <SubmitButton type="submit" disabled={isSubmitting}>
                Login
              </SubmitButton>

              <p style={{ marginTop: "20px" }}>
                Belum Punya Akun? <Link to="/register">Registrasi</Link>
              </p>
            </FormWrapper>
          )}
        </Formik>
      )}
    </div>
  );
};

export default Login;
