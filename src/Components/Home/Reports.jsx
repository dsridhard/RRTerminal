import React from "react";
import { Link } from "react-router-dom";
const Reports = () => {
  return (
    <div className="border shadow-sm ">
      <div className="border bg-primary text-white shadow-sm">Reports</div>
      <div>
        <ul className="navbar-nav">
          <li className="  text-secondary">
            <Link className="nav-link" to="/ConsolidatedReport">
              Consolidated Report
            </Link>
          </li>
          <li className="  text-secondary">
            <Link className="nav-link" to="/RoomTariffDetails">
              Room Tariff Details
            </Link>
          </li>
          <li className="  text-secondary">
            <Link className="nav-link" to=""></Link>Booking Report{" "}
          </li>
          <li className="  text-secondary">
            <Link className="nav-link" to=""></Link>Booking Report Status{" "}
          </li>
          <li className="  text-secondary">
            <Link className="nav-link" to=""></Link>
            Originating Repeprt Summary
          </li>
          <li className="  text-secondary">
            <Link className="nav-link" to=""></Link>Site Summary Report{" "}
          </li>
          <li className="  text-secondary">
            <Link className="nav-link" to=""></Link>
            Detailed Transaction Checklist
          </li>
          <li className="  text-secondary">
            <Link className="nav-link" to=""></Link>Transaction Type Report
          </li>
          <li className="  text-secondary">
            <Link className="nav-link" to=""></Link>Login and Logout Report{" "}
          </li>
          <li className="  text-secondary">
            <Link className="nav-link" to=""></Link>Ticket Roll Report{" "}
          </li>
          <li className="  text-secondary">
            <Link className="nav-link" to=""></Link>Cash Logout Report
          </li>
          <li className="  text-secondary">
            <Link className="nav-link" to=""></Link>Non Cash BooKing Report
          </li>
          <li className="  text-secondary">
            <Link className="nav-link" to=""></Link>Location List Report
          </li>
          <li className="  text-secondary">
            <Link className="nav-link" to=""></Link>
            Internet Transaction Detail Report
          </li>
          <li className="  text-secondary">
            <Link className="nav-link" to=""></Link>Apportiontment Report{" "}
          </li>
          <li className="  text-secondary">
            <Link className="nav-link" to=""></Link>
            Month Wise Earning Report
          </li>
          <li className="  text-secondary">
            <Link className="nav-link" to=""></Link>
            Hourly Booking and Earning Summary Report
          </li>
          <li className="  text-secondary">
            <Link className="nav-link" to=""></Link>
            Discount Report for Internet
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Reports;
