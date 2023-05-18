import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../layouts/header";
import Footer from "../../layouts/Footer";
import User from "../../Components/Home/UserProfile";
import SearchBox from "../../Components/Forms/SearchBox";
const Test = () => {
  const location = useLocation();
  const reservationStation = location.state.reservationStation;
  console.log(reservationStation.substring(0, 4));
  const reservationName = reservationStation.substring(0, 4);
  console.log(reservationStation.substring(5, 10));
  const reservaationStationCode = reservationStation.substring(5, 10);
  const TravelAuthority = location.state.TravelAuthority;
  const PNRNumber = location.state.PNRNumber;
  const PNRResponse = location.state.PNRResponse;
  const CheckRoomAvailability = () => {
    alert("Testing");
  };
  return (
    <>
      This is Test Page {reservationStation} {TravelAuthority}
      {PNRNumber}
      {PNRResponse.dateOfJourney}
      {PNRResponse.arrivalDate}
      {PNRResponse.trainNumber}
      {PNRResponse.sourceStation}
      {PNRResponse.destinationStation}
      <Header />
      <User />
      <div className="container border shadow">
        <div className="row border">
          <h5 className="bg-primary text-white p-1">
            Retiringroom Reservation
          </h5>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">Travel Authority:{TravelAuthority}</div>
          <div className="col-12">
            Quota :
            <select>
              <option value="GN">GN</option>
              <option value="LD">LD</option>
              <option value="HQ/VIP">HQ/VIP</option>
              <option value="GM">GM</option>
              <option value="HP">HP</option>
            </select>
          </div>
        </div>
        <div className="row justify-content-center border">
          <div className="col-12">PNR No :{PNRNumber}</div>
          <div className="col-12">
            Source Station:{PNRResponse.sourceStation}
          </div>
          <div className="col-12">
            Destination Station: {PNRResponse.destinationStation}
          </div>
          <div className="col-12">
            Depature Date:{PNRResponse.dateOfJourney}
          </div>
          <div className="col-12">Arrival Date:{PNRResponse.arrivalDate}</div>
          <div className="col-12">Train No:{PNRResponse.trainNumber}</div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">Reservation Station :{reservationName}</div>
          <div className="col-12">
            ReserVation From Date: <input type="date" />
          </div>
          <div className="col-12">
            Reservation To Date <input type="date" />
          </div>
        </div>
        <div className="row justify-content-center border">
          <div className="col-12">
            Bed Type:
            <select>
              <option value="Dormitory">Dormitory</option>
              <option value="Double">Double</option>
              <option value="Single">Single</option>
              <option value="Family">Family</option>
              <option value="All">All</option>
            </select>
          </div>
          <div className="col-12">
            AC Type Status :
            <select>
              <option value="With AC">With AC</option>
              <option value="Non AC">Non AC</option>
            </select>
          </div>
        </div>
        <div className="row justify-content-center my-2">
          <div className="col-6">
            <SearchBox />
          </div>
        </div>
        {
          <>
            <h5 className="bg-primary text-white my-3">Room Availability</h5>
          </>
        }
      </div>
      <Footer />
    </>
  );
};

export default Test;
