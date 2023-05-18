import React from "react";
import { Link } from "react-router-dom";
const RoomCancellation = () => {
  return (
    <div className="border ">
      <div className="border bg-primary text-white shadow-sm">
        Retiring Room Cancellation
      </div>
      <div className="">
        <ul className="navbar-nav">
          <li className="nav-item  text-secondary">
            <Link className="nav-link" to="RoomCancellation">
              RoomCancellation
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RoomCancellation;
