import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { TextField, Button } from "@mui/material";

import { useFormik } from "formik";
function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  // console.log(formik.values);
  // const LoginHandler = () => {
  //   fetch("http://172.16.14.78/rr/Webservices/login", {
  //     method: "post",
  //     body: JSON.stringify({
  //       username: "rradmin",
  //       password: "rrwelcome",
  //     }),
  //     headers: {
  //       "content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((response) => {
  //       if (response.error) {
  //       } else {
  //         sessionStorage.setItem("token", response.token);
  //         sessionStorage.setItem("userName", response.username);
  //         sessionStorage.setItem("role", response.roleId);
  //         navigate("/home");
  //       }
  //     });
  // };
  // useEffect(() => {
  //   LoginHandler;
  // }, []);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-6 col-md-4 col-lg-4 my-5 p-5 border shadow">
          <h5>Welcome!</h5>
          <span>Log in to your account</span>
          <form>
            <div className="my-3">
              <TextField
                id="userName"
                fullWidth
                name="userName"
                type="text"
                label="Username"
                variant="standard"
                s
              />
              {/* <input
                id="userName"
                name="userName"
                type="text"
                className="form-control"
                placeholder="UserName"
                value={formik.values.userName}
                onChange={formik.handleChange}
              /> */}
            </div>
            <div>
              {/* <input
                id="password"
                name="password"
                type="password"
                className="form-control"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
              /> */}
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                variant="standard"
                type="password"
              />
            </div>
            <div className="my-2">
              {/* <button type="submit" className="btn btn-sm btn-primary  ">
                Login
              </button> */}
              <Button
                type="submit"
                onClick={() => {
                  navigate("/home");
                }}
                variant="contained"
              >
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
