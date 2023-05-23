import React from "react";
import MenuPage from "./MenuPage";
import LoginPage from "./LoginPage";
const HomePage = () => {
  const LoggedUser = sessionStorage.getItem("username");
  // console.log(LoggedUser);
  return (
    <>
      <LoginPage />
    </>
  );
};

export default HomePage;
