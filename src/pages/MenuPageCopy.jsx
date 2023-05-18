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
const MenuPage = () => {
  return (
    <div className="container">
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <User />
      </div>
      <div className="row border p-5">
        <div className="col">
          <CreateMaster />
        </div>
        <div className="col">
          <RoomBooking />
          <RoomCancellation />
        </div>
        <div className="col">
          <Reports />
        </div>
        <div className="col">
          <Administration />
          <GST />
        </div>
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
};

export default MenuPage;
