import React from "react";
import { Link } from "react-router-dom";
const RoomBooking = () => {
  return (
    <div className="border shadow">
      <div className="border bg-primary text-white shadow-sm">
        Retiring Room Booking
      </div>
      <div className="">
        <ul className="navbar-nav">
          <li className="nav-item text-secondary">
            <Link className="nav-link" to="/BookRoom">
              Book Room
            </Link>
          </li>
          <li className="nav-item text-secondary">
            <Link className="nav-link" to="/BookRoom">
              Room Check-IN
            </Link>
          </li>
          <li className="nav-item text-secondary">
            <Link className="nav-link" to="/BookRoom">
              Room Check-OUT
            </Link>
          </li>
          <li className="nav-item text-secondary ">
            <Link className="nav-link" to="/BookRoom">
              Extend Booking
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RoomBooking;
