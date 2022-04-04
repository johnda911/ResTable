import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import * as ReservationAPIUtil from "../../utils/reservation_api_util";
import {
  requestReservation,
  deleteReservation,
} from "../../actions/reservation_actions";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// class eservationModification extends React.Component {
//   constructor(props) {
//     super(props);
//     // console.log(this.props);
//     let reservation = {
//       cancelled: false,
//       ...this.props.reservation,
//     };
//     this.state = { ...reservation, open: false };
//     this.handleCancel = this.handleCancel.bind(this);
//     this.handleProfile = this.handleProfile.bind(this);
//     this.handleAlertClose = this.handleAlertClose.bind(this);
//     this.handleAlertOpen = this.handleAlertOpen.bind(this);
//     this.handleModify = this.handleModify.bind(this);
//   }

//   componentDidMount() {
//     this.props.requestReservation(this.props.match.params.reservationId);
//   }

//   handleAlertClose() {
//     this.setState({ open: false });
//   }

//   handleAlertOpen() {
//     this.setState({ open: true });
//   }

//   handleCancel() {
//     this.handleAlertClose();
//     this.setState({ cancelled: true });
//     this.props.deleteReservation(this.props.reservation.id);
//   }
//   handleProfile() {
//     this.props.history.push(
//       `/user/${this.props.reservation.user_id}/reservations`
//     );
//   }
//   handleModify() {
//     console.log(this.props);
//     console.log(this.props.match.params.reservationId);
//     return;
//     // this.props.history.push(
//     //   `/reservation/${this.props.match.params.reservationId}/confirmation/modify`
//     // );
//   }

//   render() {
//     const { reservation } = this.props;
//     if (reservation && reservation.date) {
//       reservation.date = new Date(Date.parse(reservation.date)).toLocaleString(
//         "en-US",
//         {
//           timeZone: "America/New_York",
//         }
//       );
//     }

//     return (
//       <div className="confirmation-box">
//         {/* library used to make an alert */}
//         <Dialog
//           open={this.state.open}
//           onClose={this.handleAlertClose}
//           aria-labelledby="alert-dialog-title"
//           aria-describedby="alert-dialog-description"
//         >
//           {/* <div className="question-alert" id="alert-dialog-title"> */}
//           <DialogTitle id="alert-dialog-title">
//             {"Are you sure you want to cancel this reservation?"}
//           </DialogTitle>
//           {/* </div> */}
//           <DialogContent>
//             {reservation && (
//               <div>
//                 <div className="confirm-title">
//                   {reservation.restaurantName}
//                 </div>
//                 <div className="confirm-info-div">
//                   <span className="confirmation-info">
//                     <CgProfile className="calender-icon" />
//                     {reservation.party_size}(Standard seating )
//                   </span>
//                   <span className="confirmation-info">
//                     <AiOutlineCalendar className="calender-icon" />
//                     {reservation.date}
//                   </span>
//                 </div>
//               </div>
//             )}
//             {/* </DialogContentText> */}
//           </DialogContent>
//           <DialogActions>
//             <Button
//               className="nevermind"
//               color="error"
//               onClick={this.handleAlertClose}
//             >
//               Nevermind
//             </Button>
//             <Button
//               className="confirm-cancel"
//               variant="contained"
//               color="error"
//               onClick={this.handleCancel}
//             >
//               Confirm cancellation
//             </Button>
//           </DialogActions>
//         </Dialog>
//         {reservation && (
//           <div className="confirmation-container">
//             <div className="top-session">
//               <div>
//                 <img
//                   className="small-photo"
//                   src={reservation.restaurantPhotoURL}
//                 />
//               </div>
//               <div className="info-list">
//                 <div className="confirmation-title">
//                   {reservation.restaurantName}
//                 </div>
//                 <div>
//                   {this.state.cancelled ? (
//                     <div className="res-confirmed">
//                       <AiFillCloseCircle className="uncheck-icon" /> Reservation
//                       cancelled
//                     </div>
//                   ) : (
//                     <div className="res-confirmed">
//                       <FcApproval className="check-icon" /> Reservation
//                       confirmed
//                     </div>
//                   )}
//                 </div>
//                 <div className="confirm-info-div">
//                   <span className="confirmation-info">
//                     <CgProfile className="calender-icon" />
//                     {reservation.party_size}(Standard seating )
//                   </span>
//                   <span className="confirmation-info">
//                     <AiOutlineCalendar className="calender-icon" />
//                     {reservation.date}
//                   </span>
//                 </div>
//                 {this.state.cancelled ? (
//                   <Link
//                     className="homepg-btn"
//                     to={`/user/${this.props.currentUser.id}/reservations`}
//                   >
//                     Go back to My Reservations
//                   </Link>
//                 ) : (
//                   <span>
//                     <button className="cancel-btn" onClick={this.handleModify}>
//                       Modify
//                     </button>
//                     <button
//                       className="cancel-btn"
//                       onClick={this.handleAlertOpen}
//                     >
//                       Cancel
//                     </button>
//                     <button className="view-btn" onClick={this.handleProfile}>
//                       My Reservations
//                     </button>
//                   </span>
//                 )}
//               </div>
//             </div>
//             {!this.state.cancelled && (
//               <div className="mid-session">
//                 <div className="halo-box">
//                   <div className="confirmation-icon">
//                     <FaMapMarkedAlt className="iconnn" />
//                   </div>
//                   <Link
//                     className="confirmation-back-to-res"
//                     to={`/restaurant/${reservation.restaurant_id}`}
//                   >
//                     <div className="black-char">Browse menu</div>
//                     <div className="grey-res">Restaurant's Profile</div>
//                   </Link>
//                 </div>
//                 <div className="halo-box">
//                   <div className="confirmation-icon">
//                     <MdOutlineMenuBook className="iconnn" />
//                   </div>
//                   <Link
//                     className="confirmation-back-to-res"
//                     to={`/restaurant/${reservation.restaurant_id}`}
//                   >
//                     <div className="black-char">Get directions</div>
//                     <div className="grey-res">Restaurant's Address</div>
//                   </Link>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     );
//   }
// }

// const mSTP = (state, ownProps) => {
//   let reservation =
//     state.entities.reservations[ownProps.match.params.reservationId];
//   return {
//     reservation,
//     currentUser: state.session.currentUser,
//   };
// };

// const mDTP = (dispatch) => {
//   return {
//     requestReservation: (reservationId) =>
//       dispatch(requestReservation(reservationId)),
//     deleteReservation: (reservationId) =>
//       dispatch(deleteReservation(reservationId)),
//   };
// };

// export default connect(mSTP, mDTP)(ReservationModification);
