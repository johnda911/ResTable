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
import { HiTrendingUp } from "react-icons/hi";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default ({
  reservation,
  currentUser,
  requestReservation,
  updateReservation,
  history,
}) => {
  const [myReservation, setMyReservation] = useState(reservation);

  console.log(myReservation);
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
    // console.log(newDate); //Thu Apr 21 2022 18:30:28 GMT-0400 (Eastern Daylight Time)
    myReservation.date = newDate;
    const newRes = Object.assign({}, myReservation);
    setMyReservation(newRes);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // get hours from time
    // const timeStr = myReservation.time; // 08:20:00
    // const hour = Number(timeStr.split(":")[0]);
    // const miniute = Number(timeStr.split(":")[1]);
    //set time for date
    // const reservationDate = myReservation.date;
    // reservationDate.setHours(hour);
    // reservationDate.setMinutes(miniute);
    // console.log(reservationDate); //Thu Mar 31 2022 18:30:22 GMT-0400 (Eastern Daylight Time)
    // console.log(state.date); //Thu Mar 31 2022 18:30:22 GMT-0400 (Eastern Daylight Time)
    // console.log(state.time); //18:30:00
    // const partySize = myReservation.party_size;

    ReservationAPIUtil.updateReservation({
      id: myReservation.id,
      date: myReservation.date,
      time: myReservation.time,
      party_size: myReservation.party_size,
      phone: "(123)-456-7890",
      restaurant_id: myReservation.restaurant_id,
      user_id: currentUser.id,
    }).then((reservation) => {
      console.log(reservation);
      history.push(`/reservation/${reservation.id}/confirmation`);
    });
  };

  return (
    <div className="reservation-form">
      <div>Modify your reservation</div>
      <div className="party-size">
        <FormControl variant="standard" fullWidth>
          <Select
            id="party-select"
            value={`${myReservation.party_size}`}
            label="Party Size"
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
      <div className="date-time">
        <div className="date">
          <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                className="date-picker"
                label=""
                value={myReservation.date}
                onChange={(newDate) => {
                  handleDateChange(newDate);
                }}
                renderInput={(params) => (
                  <TextField variant="standard" {...params} />
                )}
                components={{ OpenPickerIcon: ArrowDropDownIcon }}
              />
            </LocalizationProvider>
          </div>
        </div>
        <div className="time">
          <FormControl variant="standard" fullWidth>
            <Select
              id="time-select"
              value={myReservation.time}
              label="Time"
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
      </div>
      <div className="reserve-table-btn" onClick={handleSubmit}>
        Modify the reservation
      </div>
    </div>
  );
};