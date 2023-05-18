import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
const BOOKRRPNR = () => {
  const location = useLocation();
  const pnrData = location.state.PNRresponse;
  useEffect(() => {
    console.log(pnrData.sourceStation);
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-8"></div>
        </div>
      </div>
    </>
  );
};

export default BOOKRRPNR;
