import React, { useState, useEffect } from "react";
import Header from "../../layouts/header";
import Footer from "../../layouts/Footer";
import User from "../../Components/Home/UserProfile";
import { useNavigate } from "react-router-dom";
import { TextField, MenuItem, Autocomplete } from "@mui/material";
import SearchBox from "../../Components/Forms/SearchBox";
const RoomBook = () => {
  const navigate = useNavigate();
  const [getPNR, setPNR] = useState();
  const [getStation, setStation] = useState();
  const [getTravelAuthority, setTravelAuthority] = useState("PNR");
  const [getReservationStation, setReservationStation] = useState();
  const [sourceStationCluster, setSourceStationCluster] = useState([]);
  const [destinationStationCluster, setDestinationStationCluster] = useState(
    []
  );

  const [error, setError] = useState();

  const Authority = [
    {
      value: "Railway Pass",
      label: "Railway Pass",
    },
    {
      value: "PNR",
      label: "PNR",
    },
    {
      value: "UTS Ticket",
      label: "UTS Ticket",
    },
    {
      value: "Free Pass",
      label: "Free Pass",
    },
    {
      value: "OTHERS",
      label: "OTHERS",
    },
  ];
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
        console.log(result.sourceStationlist);
        setSourceStationCluster(result.sourceStationlist);
        setDestinationStationCluster(result.destinationStationlList);
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
            <h5 className="bg-primary text-white text-center p-1">
              Retiringroom Terminal Booking
            </h5>
            <form onSubmit={handlePNR} className="border p-2">
              <div className="px-3 pb-3">
                <TextField
                  id="standard-select-currency"
                  select
                  label="Travel Authority"
                  defaultValue="PNR"
                  helperText="Please select Travel Authority"
                  variant="standard"
                  value={getTravelAuthority}
                  onChange={(e) => setTravelAuthority(e.target.value)}
                >
                  {Authority.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div className="px-3 pb-3">
                {(() => {
                  if (getTravelAuthority === "PNR")
                    return (
                      <>
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
                        <div className="text-center">
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
                                      <h5 className="text-primary">
                                        {getStation.sourceStation}
                                      </h5>
                                    </span>
                                  </div>
                                  <div className="col-4">
                                    <span className="float-end">
                                      Destination Station:
                                      <h5 className="text-primary">
                                        {getStation.destinationStation}
                                      </h5>
                                    </span>
                                  </div>
                                  <div className="col-2">
                                    <span className="float-end">Train No</span>
                                    <h5 className="text-dark text-center">
                                      {getStation.trainNumber}
                                    </h5>
                                  </div>
                                </div>
                                <div className="row  border ">
                                  <div className="col-6">
                                    <span className="">Depature Date</span>
                                    <br></br>
                                    {getStation.dateOfJourney}
                                  </div>
                                  <div className="col-6">
                                    <span> Arrival Date </span>
                                    <br></br>
                                    {getStation.arrivalDate}
                                  </div>
                                </div>
                                <div className="row justify-content-center border">
                                  <div className="col-6 my-3">
                                    <TextField
                                      id="standard-select-currency"
                                      select
                                      label="Source Station"
                                      defaultValue=""
                                      helperText="Please Select Station"
                                      variant="standard"
                                      value={getReservationStation}
                                      onChange={function TestNavigate(event) {
                                        setReservationStation(
                                          event.target.value
                                        );
                                        alert(event.target.value);
                                        navigate("/Retiringroom Reservation", {
                                          state: {
                                            reservationStation:
                                              event.target.value,
                                            TravelAuthority: getTravelAuthority,
                                            PNRNumber: getPNR,
                                            PNRResponse: getStation,
                                          },
                                        });
                                      }}
                                    >
                                      {sourceStationCluster.map(
                                        (option, index) => (
                                          <MenuItem
                                            key={index}
                                            value={[
                                              option.stationid,
                                              option.stationcode,
                                            ]}
                                          >
                                            {option.stationcode}
                                          </MenuItem>
                                        )
                                      )}
                                    </TextField>
                                  </div>
                                  <div className="col-6  my-3">
                                    <TextField
                                      id="standard-select-currency"
                                      select
                                      label="Destination Station"
                                      defaultValue=""
                                      helperText="Please Select Station"
                                      variant="standard"
                                      value={getReservationStation}
                                      onChange={function TestNavigate(event) {
                                        setReservationStation(
                                          event.target.value
                                        );
                                        alert(event.target.value);
                                        navigate("/Retiringroom Reservation", {
                                          state: {
                                            reservationStation:
                                              event.target.value,
                                            TravelAuthority: getTravelAuthority,
                                            PNRNumber: getPNR,
                                            PNRResponse: getStation,
                                          },
                                        });
                                      }}
                                    >
                                      {destinationStationCluster.map(
                                        (option, index) => (
                                          <MenuItem
                                            key={index}
                                            value={[
                                              option.stationid,
                                              option.stationcode,
                                            ]}
                                          >
                                            {option.stationcode}
                                          </MenuItem>
                                        )
                                      )}
                                    </TextField>
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
                        <SearchBox />
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
