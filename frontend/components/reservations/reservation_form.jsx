import React from "react";
import * as ReservationAPIUtil from "../../utils/reservation_api_util";

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

export default class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.reservation;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTimeChange = (event) => {
    this.setState({ time: event.target.value });
  };
  handlePartyChange = (event) => {
    this.setState({ partySize: event.target.value });
  };
  //   handleInput(field) {
  //     return (e) => this.setState({ [field]: e.currentTarget.value });
  //   }

  handleSubmit(e) {
    e.preventDefault();
    // get hours from time
    const timeStr = this.state.time; // 08:20:00
    const hour = Number(timeStr.split(":")[0]);
    const miniute = Number(timeStr.split(":")[1]);
    //set time for date
    const reservationDate = this.state.date;
    reservationDate.setHours(hour);
    reservationDate.setMinutes(miniute);

    const partySize = this.state.partySize;

    // this.props.createReservation({
    //   restaurant_id: this.props.restaurant_id,
    //   date: reservationDate,
    //   time: reservationDate,
    //   party_size: partySize,
    //   phone: "(123)-456-7890",
    // });

    ReservationAPIUtil.createReservation({
      restaurant_id: this.props.restaurant_id,
      date: reservationDate,
      time: reservationDate,
      party_size: partySize,
      phone: "(123)-456-7890",
    }).then((reservation) => {
      this.props.history.push(`/reservation/${reservation.id}/confirmation`);
    });

    // this.props.history.push("/reservation/confirmation");
  }

  render() {
    return (
      <div className="reservation-form">
        <div className="title">Make a reservation</div>
        <div className="party-size">
          <div className="reservation-sub-title">Party Size</div>
          <FormControl variant="standard" fullWidth>
            <Select
              id="party-select"
              value={this.state.partySize}
              label="Party Size"
              //   onChange={this.handleInput("partySize")}
              onChange={this.handlePartyChange}
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
                  value={this.state.date}
                  onChange={(newDate) => {
                    console.log(typeof newDate);
                    console.log(newDate);
                    console.log(Object.keys(newDate));
                    this.setState({ date: newDate });
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
                value={this.state.time}
                label="Time"
                // onChange={this.handleInput("time")}
                onChange={this.handleTimeChange}
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
        <div className="reserve-table-btn" onClick={this.handleSubmit}>
          Reserve a table
        </div>
        <div className="popularity">
          <HiTrendingUp className="icon" /> Booked 60 times today
        </div>
      </div>
    );
  }
}
