import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../layouts/header";
import Footer from "../../layouts/Footer";
import User from "../../Components/Home/UserProfile";
import TextField from "@mui/material/TextField";
const Test = () => {
  const location = useLocation();
  const reservationStation = location.state.reservationStation;
  const reservationStationString = reservationStation.split(",");
  // console.log(reservationStationString[0].trim());
  const reservationStationName = reservationStationString[0].trim();
  // console.log(reservationStationString[1].trim());
  const reservationStationCode = reservationStationString[1].trim();
  const TravelAuthority = location.state.TravelAuthority;
  const PNRNumber = location.state.PNRNumber;
  const PNRResponse = location.state.PNRResponse;
  const [getQuota, setQuota] = useState();
  const [getBedType, setBedType] = useState();
  const [getAc, setAc] = useState();
  const [getCheckInDate, setCheckInDate] = useState();
  const [getCheckOutDate, setCheckOutDate] = useState();
  const [getRoomAvailability, setRoomAvailability] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [error, setError] = useState();
  const CheckRoomAvailability = () => {
    alert(getCheckInDate);
    setShowTable(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      stationCode: 5717,
      checkInTime: "2023-05-16 20:00:00",
      checkOutTime: "2023-05-17 20:00:00",
      bookingType: "all",
      travelAutho: "other",
      travelAuthoId: "2521994982",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "http://172.16.14.78/rr/Webservices/roomAvailabilityCheck",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.roomAVList == null) {
          setError(result.msg);
        } else {
          setRoomAvailability(result.roomAVList);
        }
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    return () => {
      CheckRoomAvailability;
    };
  }, []);
  return (
    <>
      {/* This is Test Page {reservationStation} {TravelAuthority} */}
      {PNRNumber}
      {/* {PNRResponse.dateOfJourney} */}
      {/* {PNRResponse.arrivalDate} */}
      {/* {PNRResponse.trainNumber} */}
      {/* {PNRResponse.sourceStation} */}
      {/* {PNRResponse.destinationStation} */}
      {reservationStationName},{reservationStationCode}
      <Header />
      <User />
      <div className="container border shadow">
        <div className="row border">
          <h5 className="bg-primary text-white p-1">
            Retiringroom Reservation
          </h5>
        </div>
        <div className="row justify-content-center p-3">
          <div className="col-6">Travel Authority:{TravelAuthority}</div>
          <div className="col-6">
            Quota :
            <select value={getQuota} onChange={(e) => setQuota(e.target.value)}>
              <option value="GN">GN</option>
              <option value="LD">LD</option>
              <option value="HQ/VIP">HQ/VIP</option>
              <option value="GM">GM</option>
              <option value="HP">HP</option>
            </select>
          </div>
        </div>
        <div className="row justify-content-center border p-3">
          <div className="col-2">PNR No :{PNRNumber}</div>
          <div className="col-2">
            Source Station:{PNRResponse.sourceStation}
          </div>
          <div className="col-2">
            Destination Station: {PNRResponse.destinationStation}
          </div>
          <div className="col-2">Depature Date:{PNRResponse.dateOfJourney}</div>
          <div className="col-2">Arrival Date:{PNRResponse.arrivalDate}</div>
          <div className="col-2">Train No:{PNRResponse.trainNumber}</div>
        </div>
        <div className="row justify-content-center p-3">
          <div className="col-3">
            Reservation Station :{reservationStationName}
          </div>
          <div className="col-3">
            Reservation From Date
            {/* <input
              onChange={(e) => setCheckInDate(e.target.value)}
              value={getCheckInDate}
              type="datetime-local"
            /> */}
            <TextField
              type="datetime-local"
              fullWidth
              onChange={(e) => setCheckInDate(e.target.value)}
              value={getCheckInDate}
              id="RoomSearchAvailability"
              placeholder="Enter Station Name"
            />
          </div>
          <div className="col-3">
            Reservation To Date
            {/* <input
              value={getCheckOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              type="datetime-local"
            /> */}
            <TextField
              type="datetime-local"
              fullWidth
              value={getCheckOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              id="RoomSearchAvailability"
              placeholder="Enter Station Name"
            />
          </div>
        </div>
        <div className="row justify-content-center border p-3">
          <div className="col-6">
            Bed Type:
            <select
              value={getBedType}
              onChange={(e) => setBedType(e.target.value)}
            >
              <option value="Dormitory">Dormitory</option>
              <option value="Double">Double</option>
              <option value="Single">Single</option>
              <option value="Family">Family</option>
              <option value="All">All</option>
            </select>
          </div>
          <div className="col-6">
            AC Type Status :
            <select value={getAc} onChange={(e) => setAc(e.target.value)}>
              <option value="With AC">With AC</option>
              <option value="Non AC">Non AC</option>
            </select>
          </div>
        </div>
        <div className="row justify-content-center my-2 p-3">
          <div className="col-12">
            <button className="btn btn-primary" onClick={CheckRoomAvailability}>
              Check Room Availability
            </button>

            {showTable && (
              <table className="table">
                <thead>
                  <tr>
                    <th>Select</th>
                    <th>Room No</th>
                    <th>Bed Type</th>
                    <th>Room Feature</th>
                    <th>Room Type</th>
                    <th>Duration</th>
                    <th>Tarrif</th>
                    <th>Extra Bed</th>
                    <th>Check In Time</th>
                    <th>Check Out Time</th>
                  </tr>
                </thead>
                <tbody>
                  {getRoomAvailability.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <input key={index} type="checkbox" />
                      </td>
                      <td>{item.roomNo}</td>
                      <td>{item.bedType}</td>
                      <td>{item.amenities}</td>
                      <td>{item.roomType}</td>
                      <td>{item.duration}</td>
                      <td>{item.totaltarrif}</td>
                      <td>{item.extrabedcharge}</td>
                      <td>{item.checkinTime}</td>
                      <td>{item.checkoutTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Test;
