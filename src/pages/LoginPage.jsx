import React from "react";
import Header from "../layouts/header";
import Footer from "../layouts/Footer";
import Login from "../Components/Forms/login";
const LoginPage = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <Header />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <Login />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
