import * as ReservationAPIUtil from '../utils/reservation_api_util';

export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const REMOVE_RESERVATION = "REMOVE_RESERVATION";

const receiveReservation = reservation => ({
    type: RECEIVE_RESERVATION,
    reservation
});
const removeReservation = reservationId => ({
    type: REMOVE_RESERVATION,
    reservationId
});


export const requestReservation = (reservationId) => dispatch => {
    return ReservationAPIUtil.fetchReservation(reservationId)
        .then(reservation => dispatch(receiveReservation(reservation)));
}

export const createReservation = (reservation) => dispatch => {
    return ReservationAPIUtil.createReservation(reservation)
        .then(reservation => dispatch(receiveReservation(reservation)));
}

export const deleteReservation = (reservationId) => dispatch => {
    return ReservationAPIUtil.deleteReservation(reservationId)
        .then(() => dispatch(removeReservation(reservationId)));
}