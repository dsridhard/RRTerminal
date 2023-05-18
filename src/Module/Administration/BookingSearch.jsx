import React, { useState } from "react";
import Header from "../../layouts/header";
import Footer from "../../layouts/Footer";
import User from "../../Components/Home/UserProfile";
const BookingSearch = () => {
  const [getBookingSearchDetail, setBookingSearchDetail] = useState([{}]);
  const [getBookingDetail, setBookingDetail] = useState("");
  const BookingSearchHandler = () => {
    fetch("http://172.16.14.78/rr/bookingSearch/KOTA022466")
      .then((res) => res.json())
      .then((response) => {
        console.warn(response.id);
        // setBookingSearchDetail(response);
        // console.table(response);
        // console.log(getBookingSearchDetail);
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <>
      <Header />
      <User />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6 col-xs-6">
            <h5 className="bg-primary text-white p-1">Booking Search</h5>
            <form className="border p-2">
              <div className="px-3 pb-3">
                <label className="form-label">
                  Booking Id/Transaction Id(For Internet)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="RoomSearchAvailability"
                  aria-describedby="RoomSearchAvail"
                  placeholder="Enter Station Name"
                  value={getBookingDetail}
                  onChange={(e) => setBookingDetail(e.target.value)}
                />
              </div>
              <div>
                <button
                  onClick={BookingSearchHandler}
                  className="btn btn-primary"
                  type="submit"
                >
                  Search
                </button>
                {("Testing", getBookingSearchDetail.id)}
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookingSearch;
