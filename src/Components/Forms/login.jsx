import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { TextField, Button, InputAdornment, IconButton } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import * as Yup from "yup";
import axios from "axios";
function Login() {
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username"),
    password: Yup.string().required("Password"),
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = (values) => {
    // console.log(values);
    const username = values.username;
    const password = values.password;
    // console.log(username, password);
    let data = JSON.stringify({
      username: username,
      password: password,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost/rr/Webservices/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        const LoginResponse = response.data;
        sessionStorage.setItem("username", LoginResponse.username);
        sessionStorage.setItem("role", LoginResponse.roleId);
        sessionStorage.setItem("token", LoginResponse.token);

        navigate("/home");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    handleSubmit;
  }, []);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-6 col-md-4 col-lg-4 my-5 p-5 border shadow">
          <h4>Welcome!</h4>
          <span>Log in to your account</span>
          <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <Field
                  variant="standard"
                  as={TextField}
                  label="Username"
                  name="username"
                  fullWidth
                  margin="normal"
                  error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
                />
                <Field
                  variant="standard"
                  as={TextField}
                  label="Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  fullWidth
                  margin="normal"
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <MdVisibilityOff />
                          ) : (
                            <MdVisibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Button type="submit" variant="contained" color="primary">
                  Login
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Login;
