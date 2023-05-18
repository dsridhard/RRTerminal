import React, { useState, useEffect } from "react";
import Header from "../../layouts/header";
import Footer from "../../layouts/Footer";
import User from "../../Components/Home/UserProfile";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";

const RoomBook = () => {
  const navigate = useNavigate();
  const [getPNR, setPNR] = useState();
  const [getStation, setStation] = useState();
  const [getTravelAuthority, setTravelAuthority] = useState();
  const [getReservationStation, setReservationStation] = useState();
  const [error, setError] = useState();
  const handlePNR = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `http://172.16.14.78/rr/Webservices/getPnrEnquiry/${getPNR}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setStation(result);
        console.log(result.error);
        setError(result.message);
      })
      .catch((error) => {
        console.log("error", error);
        console.warn(error.message);
      });
  };

  useEffect(() => {
    handlePNR;
  }, [getPNR]);

  return (
    <>
      <Header />
      <User />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6 col-xs-6">
            <h5 className="bg-primary text-white p-1">
              Retiringroom Terminal Booking
            </h5>
            <form onSubmit={handlePNR} className="border p-2">
              <div className="px-3 pb-3">
                <label htmlFor="exampleInputEmail1" className="form-label mx-3">
                  Travel Authority:
                </label>

                <select
                  value={getTravelAuthority}
                  onChange={(e) => setTravelAuthority(e.target.value)}
                >
                  <option>Railway Pass</option>
                  <option>PNR</option>
                  <option>UTS Ticket</option>
                  <option>Free Pass</option>
                  <option>OTHERS</option>
                </select>
              </div>
              <div className="px-3 pb-3">
                {(() => {
                  if (getTravelAuthority === "PNR")
                    return (
                      <>
                        {/* <input
                          type="search"
                          className="form-control"
                          id="RoomSearchAvailability"
                          aria-describedby="RoomSearchAvail"
                          placeholder="Enter PNR No"
                          value={getPNR}
                          onChange={(e) =>
                            setPNR(e.target.value.replace(/[^0-9]/g, ""))
                          }
                        /> */}
                        <TextField
                          type="search"
                          fullWidth
                          placeholder="Enter PNR No. "
                          label="PNR"
                          id="RoomSearchAvailability"
                          value={getPNR}
                          onChange={(e) =>
                            setPNR(e.target.value.replace(/[^0-9]/g, ""))
                          }
                        />
                        <div>
                          <button
                            className="btn btn-primary mt-2"
                            type="submit"
                          >
                            Fetch PNR
                          </button>
                          <br></br>

                          <span className="text-danger mt-3"> {error}</span>
                        </div>
                        {(() => {
                          if (getStation) {
                            return (
                              <>
                                <div className="row justify-content-center border mt-2 ">
                                  <div className="col-4">
                                    <span className="float-start">
                                      Source Station:
                                      <span className="text-danger">
                                        {getStation.sourceStation}
                                        <br></br>
                                      </span>
                                    </span>
                                  </div>
                                  <div className="col-6">
                                    <span className="float-end">
                                      Destination Station:
                                      <span className="text-danger">
                                        {getStation.destinationStation}
                                        <br></br>
                                      </span>
                                    </span>
                                  </div>
                                </div>
                                <div className="row  border ">
                                  <div className="col-5">
                                    Depature Date:{getStation.dateOfJourney}
                                  </div>
                                  <div className="col-5">
                                    Arrival Date : {getStation.arrivalDate}
                                  </div>
                                  <div className="col-2">
                                    <span className="float-end">
                                      Train No: {getStation.trainNumber}
                                    </span>
                                  </div>
                                </div>
                                <div className="row border">
                                  <div className="col-3 my-3">
                                    <span>
                                      Reservation Station:
                                      <select
                                        value={getReservationStation}
                                        onChange={function TestNavigate(event) {
                                          setReservationStation(
                                            event.target.value
                                          );
                                          alert(event.target.value);
                                          navigate(
                                            "/Retiringroom Reservation",
                                            {
                                              state: {
                                                reservationStation:
                                                  event.target.value,
                                                TravelAuthority:
                                                  getTravelAuthority,
                                                PNRNumber: getPNR,
                                                PNRResponse: getStation,
                                              },
                                            }
                                          );
                                        }}
                                      >
                                        <option>---Select----</option>
                                        <option
                                          value={[
                                            [
                                              getStation.destinationStation,
                                              getStation.destinationStationCode,
                                            ],
                                          ]}
                                        >
                                          {getStation.destinationStation}
                                        </option>
                                        <option
                                          value={[
                                            getStation.sourceStation,
                                            getStation.sourceStationCode,
                                          ]}
                                        >
                                          {getStation.sourceStation}
                                        </option>
                                      </select>
                                      {/* Selected:{getReservationStation} */}
                                    </span>
                                  </div>
                                </div>
                              </>
                            );
                          } else {
                            return <></>;
                          }
                        })()}
                      </>
                    );
                  else {
                    return (
                      <>
                        {/* <input
                          type="text"
                          className="form-control"
                          id="RoomSearchAvailability"
                          aria-describedby="RoomSearchAvail"
                          placeholder="Enter Station Name"
                        /> */}
                        <TextField
                          type="search"
                          fullWidth
                          // label="Station"
                          id="RoomSearchAvailability"
                          placeholder="Enter Station Name"
                        />
                      </>
                    );
                  }
                })()}
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RoomBook;
