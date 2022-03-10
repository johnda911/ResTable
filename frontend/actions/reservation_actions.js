import * as ReservationAPIUtil from '../utils/reservation_api_util';

export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
// export const RECEIVE_RESERVATIONS = "RECEIVE_RESERVATIONS";
export const REMOVE_RESERVATION = "REMOVE_RESERVATION";

const receiveReservation = reservation => ({
    type: RECEIVE_RESERVATION,
    reservation
});
// const receiveReservations = reservations => ({
//     type: RECEIVE_RESERVATIONS,
//     reservations
// });
const removeReservation = reservationId => ({
    type: REMOVE_RESERVATION,
    reservationId
});


export const requestReservation = (reservationId) => dispatch => {
    return ReservationAPIUtil.fetchReservation(reservationId)
        .then(reservation => dispatch(receiveReservation(reservation)));
}

// export const requestReservations = () => dispatch => {
//     return ReservationAPIUtil.fetchReservations()
//         .then(reservations => dispatch(receiveReservations(reservations)));
// }

export const createReservation = (reservation) => dispatch => {
    return ReservationAPIUtil.createReservation(reservation)
        .then(reservation => dispatch(receiveReservation(reservation))
        );
}

export const deleteReservation = (reservationId) => dispatch => {
    return ReservationAPIUtil.deleteReservation(reservationId)
        .then(() => dispatch(removeReservation(reservationId)));
}