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

export default ({ reservation, currentUser, login, history }) => {
  const [open, setOpen] = useState(false);
  const [myReservation, setMyReservation] = useState(reservation);

  const handleTimeChange = (event) => {
    myReservation.time = event.target.value;
    const newRes = Object.assign({}, myReservation);
    setMyReservation(newRes);
  };
  const handlePartyChange = (event) => {
    myReservation.partySize = event.target.value;
    const newRes = Object.assign({}, myReservation);
    setMyReservation(newRes);
  };

  const handleDateChange = (newDate) => {
    console.log(newDate); //Wed Apr 20 2022 15:45:45 GMT-0400 (Eastern Daylight Time)
    myReservation.date = new Date(Date.parse(newDate)).toLocaleString("en-US", {
      timeZone: "UTC",
    });
    console.log(myReservation.date); //4/20/2022, 7:45:45 PM
    myReservation.date = myReservation.date.split(", ")[0]; //4/20/2022
    const splitTime = myReservation.date.split("/");
    if (myReservation.date) {
      myReservation.date = splitTime[2]
        .concat("-")
        .concat(splitTime[0])
        .concat("-")
        .concat(splitTime[1]);
      console.log(myReservation.date);
      const newRes = Object.assign({}, myReservation);
      setMyReservation(newRes);
    }
  };

  const handleAlertClose = () => {
    setOpen(false);
  };

  const handleAlertOpen = () => {
    setOpen(true);
  };

  const handleDemoLogin = () => {
    handleAlertClose();
    login();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentUser) {
      handleAlertOpen();
      return;
    }
    // // get hours from time
    // const timeStr = myReservation.time; // 08:20:00
    // const hour = Number(timeStr.split(":")[0]);
    // const miniute = Number(timeStr.split(":")[1]);
    // //set time for date
    // const reservationDate = myReservation.date;
    // reservationDate.setHours(hour);
    // reservationDate.setMinutes(miniute);
    // reservationDate.setSeconds(0);

    // // console.log(reservationDate); //Thu Mar 31 2022 18:30:22 GMT-0400 (Eastern Daylight Time)
    // // console.log(state.date); //Thu Mar 31 2022 18:30:22 GMT-0400 (Eastern Daylight Time)
    // // console.log(state.time); //18:30:00

    console.log(myReservation);

    // if (myReservation.date && myReservation.time) {
    //   myReservation.date = new Date(
    //     Date.parse(reservation.date)
    //   ).toLocaleString("en-US", {
    //     timeZone: "UTC",
    //   });
    //   myReservation.date = myReservation.date.split(", ")[0];
    //   myReservation.time = myReservation.time.split(".")[0].substring(11); //22:00:00
    //   console.log(myReservation.date);
    //   console.log(myReservation.time);
    // }

    ReservationAPIUtil.createReservation({
      restaurant_id: myReservation.restaurant_id,
      // date: "2022-4-20",
      date: myReservation.date,
      time: myReservation.time,
      party_size: myReservation.partySize,
      phone: "(123)-456-7890",
      user_id: currentUser.id,
    }).then((reservation) => {
      history.push(`/reservation/${reservation.id}/confirmation`);
    });
  };

  return (
    <div className="reservation-form">
      {/* library used to make an alert */}
      <Dialog
        open={open}
        onClose={handleAlertClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Want to make a reservation?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please log in or sign up to make a reservation. To skip sign in,
            please click on "use Demo User".
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" onClick={handleDemoLogin}>
            Use Demo User
          </Button>
          <Button color="error" onClick={handleAlertClose}>
            Close
          </Button>
          {/* <Button onClick={this.handleDemoLogin} autoFocus>
              Close
            </Button> */}
        </DialogActions>
      </Dialog>
      <div className="title">Make a reservation</div>
      <div className="party-size">
        <div className="reservation-sub-title">Party Size</div>
        <FormControl variant="standard" fullWidth>
          <Select
            id="party-select"
            value={myReservation.partySize}
            label="Party Size"
            //   onChange={this.handleInput("partySize")}
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
          <div className="reservation-sub-title">Date</div>
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
          <div className="reservation-sub-title">Time</div>
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
        Reserve a table
      </div>
      <div className="popularity">
        <HiTrendingUp className="icon" /> Booked 60 times today
      </div>
    </div>
  );
};
