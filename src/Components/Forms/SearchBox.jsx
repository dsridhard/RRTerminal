import React, { useState } from "react";
import { Autocomplete, TextField, InputAdornment } from "@mui/material";
import { useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa";
const SearchBox = () => {
  const [searchStationName, setsearchStationName] = useState([]);
  const [getStationName, setStationName] = useState("");

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost/rr/Webservices/stationName", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        setsearchStationName(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div>
      <Autocomplete
        autoSelect="true"
        autoHighlight="true"
        noOptionsText="No Station Found"
        disablePortal
        id="combo-box-demo"
        options={searchStationName}
        getOptionLabel={(searchStationName) => searchStationName.stationname}
        placeholder="Enter Station Name"
        renderInput={(params) => (
          <TextField
            onChange={(e) =>
              setStationName(e.target.value.replace(/^[a-zA-Z]+$/))
            }
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <FaLocationArrow />
                </InputAdornment>
              ),
            }}
            fullWidth
            {...params}
            label="Station"
          />
        )}
      />
    </div>
  );
};

export default SearchBox;
