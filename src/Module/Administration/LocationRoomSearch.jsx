import React from "react";
import Header from "../../layout/header";
import Footer from "../../layout/Footer";
import User from "../Home/UserProfile";
const LocationRoomSearch = () => {
  return (
    <>
      <Header />
      <User />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6 col-xs-6">
            <h5 className="bg-primary text-white p-1">
              Room Location Information
            </h5>
            <form className="border p-2">
              <div class="px-3 pb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Enter Station For Which You Wish to View Information:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="RoomSearchAvailability"
                  aria-describedby="RoomSearchAvail"
                  placeholder="Enter Station Name"
                />
              </div>
              <div>
                <button className="btn btn-primary" type="submit">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LocationRoomSearch;
