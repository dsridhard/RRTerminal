import React from "react";
import Header from "../../layout/header";
import Footer from "../../layout/Footer";
import User from "../Home/UserProfile";
const PrintChart = () => {
  return (
    <>
      <Header />
      <User />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6 col-xs-6">
            <h5 className="bg-primary text-white p-1">PrintChart</h5>
            <form className="border p-2">
              <div className="px-3 pb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Station
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="RoomSearchAvailability"
                  aria-describedby="RoomSearchAvail"
                  placeholder="Enter Station Name"
                />
              </div>
              <div className="px-3 pb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="RoomSearchAvailability"
                  aria-describedby="RoomSearchAvail"
                  placeholder="Enter Station Name"
                />
              </div>
              <div>
                <button className="btn btn-primary mx-3" type="submit">
                  Search
                </button>
                <button className="btn btn-danger " type="reset">
                  Clear
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

export default PrintChart;
