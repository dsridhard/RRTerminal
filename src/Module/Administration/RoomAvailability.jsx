import React from "react";
import Header from "../../layouts/header";
import Footer from "../../layouts/Footer";
import User from "../../Components/Home/UserProfile";
const RoomAvailabiity = () => {
  return (
    <>
      <Header />
      <User />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6 col-xs-6">
            <h5 className="bg-primary text-white p-1">
              Room Availability Search
            </h5>
            <form>
              <div class="border px-3 pb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Enter Station
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="RoomSearchAvailability"
                  aria-describedby="RoomSearchAvail"
                  placeholder="Enter Station Name"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RoomAvailabiity;
