import React from "react";
import { Link } from "react-router-dom";
const Administration = () => {
  return (
    <div className="border">
      <div className="border bg-primary text-white shadow-sm">
        Administration
      </div>
      <div className="text-center">
        <ul className="navbar-nav">
          <li className="nav-item  text-secondary">
            <Link className="nav-link" to="/PrintChart">
              Print Chart
            </Link>
          </li>
          <li className="nav-item  text-secondary">
            <Link className="nav-link" to="/BookingSearch">
              Booking Search
            </Link>
          </li>
          <li className="nav-item  text-secondary">
            <Link className="nav-link" to="/RoomAvailabilitySearch">
              Room Availability Search
            </Link>
          </li>
          <li className="nav-item  text-secondary">
            <Link className="nav-link" to="/LocationRoomSearch">
              Location Room Search
            </Link>
          </li>
          <li className="nav-item  text-secondary">
            <Link className="nav-link" to="/ChangePassword">
              Change Password
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Administration;
