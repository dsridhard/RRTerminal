import { HashRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import BOOKRRPNR from "./PnrBook";
const BookRoomRoutes = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/BookingHome" element={<BOOKRRPNR />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default BookRoomRoutes;
