import React, { useState } from "react";
import * as ReservationAPIUtil from "../../utils/reservation_api_util";
import { postSession } from "../../utils/session";

//mui react component library
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default ({
  reservation,
  currentUser,
  requestReservation,
  updateReservation,
  history,
}) => {
  const [myReservation, setMyReservation] = useState(reservation);
  // console.log(reservation);
  // console.log(myReservation);

  if (reservation && reservation.date) {
    reservation.date = new Date(Date.parse(reservation.date)).toLocaleString(
      "en-US",
      {
        timeZone: "UTC",
      }
    );
    reservation.date = reservation.date.split(", ")[0];
    if (myReservation.date !== reservation.date) {
      setMyReservation(reservation);
    }
  }
  if (reservation && reservation.time) {
    if (reservation.time.includes(".")) {
      reservation.time = reservation.time.split(".")[0].substring(11); //22:00:00
    }
    if (myReservation.time !== reservation.time) {
      setMyReservation(reservation);
    }
  }

  const handleTimeChange = (event) => {
    myReservation.time = event.target.value;
    // console.log(event.target.value); //18:30:00
    // console.log(typeof event.target.value); //string
    const newRes = Object.assign({}, myReservation);
    setMyReservation(newRes);
  };
  const handlePartyChange = (event) => {
    myReservation.party_size = event.target.value;
    // console.log(event.target.value); //2
    // console.log(typeof event.target.value); //number
    const newRes = Object.assign({}, myReservation);
    setMyReservation(newRes);
  };

  const handleDateChange = (newDate) => {
    myReservation.date = new Date(Date.parse(newDate)).toLocaleString("en-US", {
      timeZone: "UTC",
    });
    // console.log(myReservation.date); //4/20/2022, 7:45:45 PM
    myReservation.date = myReservation.date.split(", ")[0]; //4/20/2022
    const splitTime = myReservation.date.split("/");
    if (myReservation.date) {
      myReservation.date = splitTime[2]
        .concat("-")
        .concat(splitTime[0])
        .concat("-")
        .concat(splitTime[1]);
      // console.log(myReservation.date); //2022-4-20
      // console.log("===========================");
      const newRes = Object.assign({}, myReservation);
      setMyReservation(newRes);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(reservation);
    // console.log(myReservation);

    // myReservation.time = myReservation.date.split(", ")[0]; //4/20/2022
    const splitTime = myReservation.date.split("/");
    myReservation.date = splitTime[2]
      .concat("-")
      .concat(splitTime[0])
      .concat("-")
      .concat(splitTime[1]);
    // console.log(myReservation.date); //2022-4-20
    // console.log("===========================");

    ReservationAPIUtil.updateReservation({
      restaurant_id: myReservation.restaurant_id,
      date: myReservation.date,
      time: myReservation.time,
      id: myReservation.id,
      party_size: myReservation.party_size,
      phone: "(123)-456-7890",
      user_id: currentUser.id,
    }).then((reservation) => {
      // console.log(reservation);
      history.push(`/reservation/${reservation.id}/confirmation`);
    });
  };

  return (
    <div className="reservation-form-update">
      {/* <div>Modify your reservation</div> */}

      {/* <div className="date-time-update"> */}
      <div className="date-update">
        <div>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              // className="date-picker"
              label=""
              value={myReservation.date} //"4/1/2022, 8:00:00 PM"
              onChange={(newDate) => {
                handleDateChange(newDate);
              }}
              renderInput={(params) => (
                <TextField variant="outlined" {...params} />
              )}
              components={{ OpenPickerIcon: ArrowDropDownIcon }}
            />
          </LocalizationProvider>
        </div>
      </div>
      <div className="time-update">
        {/* {console.log(myReservation.time)}
          {console.log("==============")} */}
        <FormControl variant="outlined" fullWidth>
          <Select
            id="time-select"
            //   value={myReservation.time} //"2022-04-05T22:00:00.000Z"
            value={myReservation.time}
            onChange={handleTimeChange}
          >
            <MenuItem value={"17:30:00"}>5:30 PM</MenuItem>
            <MenuItem value={"18:00:00"}>6:00 PM</MenuItem>
            <MenuItem value={"18:30:00"}>6:30 PM</MenuItem>
            <MenuItem value={"19:00:00"}>7:00 PM</MenuItem>
            <MenuItem value={"19:30:00"}>7:30 PM</MenuItem>
            <MenuItem value={"20:00:00"}>8:00 PM</MenuItem>
            <MenuItem value={"20:30:00"}>8:30 PM</MenuItem>
            <MenuItem value={"21:00:00"}>9:00 PM</MenuItem>
            <MenuItem value={"21:30:00"}>9:30 PM</MenuItem>
            <MenuItem value={"22:00:00"}>10:00 PM</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="party-size-update">
        <FormControl variant="outlined" fullWidth>
          <Select
            id="party-select"
            value={`${myReservation.party_size}`}
            onChange={handlePartyChange}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
          </Select>
        </FormControl>
      </div>
      {/* </div> */}
      <div className="modify-table-btn" onClick={handleSubmit}>
        Modify the reservation
      </div>
    </div>
  );
};
