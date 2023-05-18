import React from "react";
import { useNavigate } from "react-router-dom";
const User = () => {
  const LoggedUser = sessionStorage.getItem("userName");
  const navigate = useNavigate();
  const LogoutHandler = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("userName");
    navigate("/");
  };
  const HomeHandler = () => {
    navigate("/home");
  };
  return (
    <>
      <div className="clearfix my-1">
        <span className="float-start">Welcome {LoggedUser}</span>
        <button
          onClick={HomeHandler}
          type="button"
          className="btn btn-success float-end mx-2"
        >
          Home
        </button>
        <button
          onClick={LogoutHandler}
          type="button"
          className="btn btn-danger float-end"
        >
          Logout
        </button>
      </div>
      <div className="bg-warning text-white my-3">
        <marquee behavior="right" direction="">
          The Retiring Room 24X7 Help desk Number mobile number is
          <strong className="mx-2">9717822078</strong>
        </marquee>
      </div>
    </>
  );
};

export default User;
