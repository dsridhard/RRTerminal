import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../layouts/header";
import Footer from "../../layouts/Footer";
import User from "../../Components/Home/UserProfile";
import { TextField, MenuItem, Typography, Checkbox } from "@mui/material";
import { useTable } from "react-table";
import { MdOutlineCurrencyRupee } from "react-icons/md";

const RoomReservation = () => {
  const location = useLocation();
  const reservationStation = location.state.reservationStation;
  // console.log(reservationStation[1]);
  const tableColumn = [
    {
      Header: "Action",
      accessor: "action",
      Cell: ({ row }) => <Checkbox checkedIcon={<MdOutlineCurrencyRupee />} />,
    },
    {
      Header: "RoomNo",
      accessor: "roomNo",
    },
    {
      Header: "BedType",
      accessor: "bedType",
    },
    {
      Header: "Amenities",
      accessor: "amenities",
    },

    {
      Header: "RoomType",
      accessor: "roomType",
    },
    {
      Header: "Duration",
      accessor: "duration",
    },
    {
      Header: "TotalTarrif",
      accessor: "totaltarrif",
      Cell: ({ row }) => `${row.values.totaltarrif}`,
    },
    {
      Header: "ExtraBedCharge",
      accessor: "extrabedcharge",
    },
    {
      Header: "CheckIn",
      accessor: "checkinTime",
    },
    {
      Header: "CheckOut",
      accessor: "checkoutTime",
    },
  ];

  const reservationStationName = reservationStation[1];
  const reservationStationCode = reservationStation[0];
  const TravelAuthority = location.state.TravelAuthority;
  const PNRNumber = location.state.PNRNumber;
  const PNRResponse = location.state.PNRResponse;
  const [getQuota, setQuota] = useState("GN");
  const [getBedType, setBedType] = useState("Dormitory");
  const [getAc, setAc] = useState();
  const [getCheckInDate, setCheckInDate] = useState();
  const [getCheckOutDate, setCheckOutDate] = useState();
  const [getRoomAvailability, setRoomAvailability] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [error, setError] = useState();
  const quota = [
    {
      value: "GN",
      label: "GN",
    },
    {
      value: "LD",
      label: "LD",
    },
    {
      value: "HQ/VIP",
      label: "HQ/VIP",
    },
    {
      value: "GM",
      label: "GM",
    },
    {
      value: "HP",
      label: "HP",
    },
  ];
  const bedType = [
    {
      value: "All",
      label: "All",
    },
    {
      value: "Single",
      label: "Single",
    },
    {
      value: "Double",
      label: "Double",
    },
    {
      value: "Dormitory",
      label: "Dormitory",
    },
    {
      value: "Family",
      label: "Family",
    },
  ];
  const ac = [
    {
      value: "With AC",
      label: "With AC",
    },
    {
      value: "Non AC",
      label: "Non AC",
    },
  ];
  const CheckRoomAvailability = () => {
    alert("getCheckInDate");

    setShowTable(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      stationCode: 5409,
      checkInTime: "2023-05-22 20:00:00",
      checkOutTime: "2023-05-23 20:00:00",
      bookingType: "dormitory",
      travelAutho: "other",
      travelAuthoId: "6514585468",
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
  const columns = useMemo(() => tableColumn, []);
  const data = useMemo(() => getRoomAvailability, []);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });
  return (
    <>
      {/* This is Test Page {reservationStation} {TravelAuthority} */}
      {/* {PNRNumber} */}
      {/* {PNRResponse.dateOfJourney} */}
      {/* {PNRResponse.arrivalDate} */}
      {/* {PNRResponse.trainNumber} */}
      {/* {PNRResponse.sourceStation} */}
      {/* {PNRResponse.destinationStation} */}
      {/* {reservationStationName},{reservationStationCode} */}
      <Header />
      <User />
      <div className="container-fluid border shadow">
        <div className="row align-item-center ">
          <h5 className="bg-primary text-center text-white p-1">
            Retiringroom Reservation
          </h5>
        </div>
        <div className="row justify-content-center p-3 ">
          <div className="col-3">
            <span className="text-dark">Travel Authority :</span>
            <h5 className="text-dark"> {TravelAuthority}</h5>
          </div>
          <div className="col-3">
            <TextField
              variant="outlined"
              id="outlined-read-only-input"
              label="PNR No"
              defaultValue={PNRNumber}
              InputProps={{
                readOnly: true,
              }}
            />
          </div>
          <div className="col-3">
            <TextField
              variant="standard"
              id="outlined-read-only-input"
              label="Train No"
              defaultValue={PNRResponse.trainNumber}
              InputProps={{
                readOnly: true,
              }}
            />
          </div>
          <div className="col-3">
            <TextField
              variant="outlined"
              id="outlined-read-only-input"
              label=" Train Name"
              defaultValue={PNRResponse.trainName}
              InputProps={{
                readOnly: true,
              }}
            />
          </div>
        </div>
        <div className="row justify-content-center  p-3">
          <div className="col-3">
            <TextField
              variant="filled"
              id="outlined-read-only-input"
              label=" Source Station"
              defaultValue={PNRResponse.sourceStation}
              InputProps={{
                readOnly: true,
              }}
            />
          </div>
          <div className="col-3">
            <TextField
              variant="filled"
              id="outlined-read-only-input"
              label=" Destination Station"
              defaultValue={PNRResponse.destinationStation}
              InputProps={{
                readOnly: true,
              }}
            />
          </div>
          <div className="col-3">
            <Typography>Depature Date</Typography>
            {PNRResponse.dateOfJourney}
          </div>
          <div className="col-3">
            <Typography>Arrival Date</Typography>
            {PNRResponse.arrivalDate}
          </div>
        </div>
        <div className="row  p-3">
          <div className="col-3">
            <span> Reservation Station </span>
            <h5>{reservationStationName}</h5>
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
        <div className="row   p-3">
          <div className="col-3">
            <TextField
              id="standard-select-currency"
              select
              label="Bed Type"
              defaultValue="Dormitory"
              helperText="Please select Bed Type"
              variant="standard"
              value={getBedType}
              onChange={(e) => setBedType(e.target.value)}
            >
              {bedType.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="col-3">
            <TextField
              id="standard-select-currency"
              select
              label=" AC Type Status"
              defaultValue="With AC"
              helperText="Please select AC Type"
              variant="standard"
              value={getAc}
              onChange={(e) => setAc(e.target.value)}
            >
              {ac.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="col-3">
            <TextField
              id="standard-select-currency"
              select
              label="Quota"
              defaultValue="GN"
              helperText="Please select Quota"
              variant="standard"
              value={getQuota}
              onChange={(e) => setQuota(e.target.value)}
            >
              {quota.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>
        <div className="row justify-content-center my-2 p-3">
          <div className="col-12 text-center">
            <button
              className="btn btn-primary my-3 "
              onClick={CheckRoomAvailability}
            >
              Check Room Availability
            </button>

            {showTable && (
              <table
                className="table table-striped table-hover"
                {...getTableProps()}
              >
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => (
                          <td {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
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

export default RoomReservation;
