// import React from "react";
// import { Link } from "react-router-dom";
// import ReservationIndexItem from "./reservation_index_item";

// class ReservationIndex extends React.Component {
//   componentDidMount() {
//     this.props.requestReservations();
//   }

//   render() {
//     const { reservations } = this.props;
//     console.log(this.props);
//     return (
//       <div className="reservation-index-container">
//         <div>
//           <h2>Upcoming Reservations</h2>
//         </div>
//         <div className="reservation-profile-list">
//           {reservations.map((reservation) => {
//             return (
//               <ReservationIndexItem
//                 reservation={reservation}
//                 key={reservation.id}
//               />
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }

// export default ReservationIndex;
