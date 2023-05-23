import React from "react";
import CreateMaster from "../Components/Home/CreateMaster";
import Administration from "../Components/Home/Administration";
import GST from "../Components/Home/GST";
import RoomBooking from "../Components/Home/RoomBooking";
import RoomCancellation from "../Components/Home/RoomCancellation";
import Reports from "../Components/Home/Reports";
import Footer from "../layouts/Footer";
import Header from "../layouts/header";
import User from "../Components/Home/UserProfile";
import Box from "@mui/material/Box";
const MenuPage = () => {
  return (
    <div className="container">
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <User />
      </div>
      <div className="row d-flex-column border p-5 bg-primary text-white">
        <div className="col-12">
          <ul className="  navbar-nav me-auto mb-2 mb-lg-0">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
};

export default MenuPage;
