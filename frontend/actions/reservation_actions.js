import * as ReservationAPIUtil from '../utils/reservation_api_util';
export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const REMOVE_RESERVATION = "REMOVE_RESERVATION";
// export const RECEIVE_RESERVATION_ERRORS = "RECEIVE_RESERVATION_ERRORS";
// export const CLEAR_RESERVATION_ERRORS = 'CLEAR_RESERVATION_ERRORS';


const receiveReservation = reservation => ({
    type: RECEIVE_RESERVATION,
    reservation
});

const removeReservation = reservationId => ({
    type: REMOVE_RESERVATION,
    reservationId
});

// const receiveReservationErrors = errors => ({
//     type: RECEIVE_RESERVATION_ERRORS,
//     errors
// });


export const requestReservation = (reservationId) => dispatch => {
    return ReservationAPIUtil.fetchReservation(reservationId)
        .then(reservation => {
            dispatch(receiveReservation(reservation))
        });
}

export const createReservation = (reservation) => dispatch => {
    return (
        ReservationAPIUtil.createReservation(reservation)
            .then(
                reservation => dispatch(receiveReservation(reservation))
            ));
}

export const deleteReservation = (reservationId) => dispatch => {
    return ReservationAPIUtil.deleteReservation(reservationId)
        .then(() => dispatch(removeReservation(reservationId)));
}

export const updateReservation = (reservation) => dispatch => {
    return ReservationAPIUtil.updateReservation(reservation)
        .then(reservation => dispatch(receiveReservation(reservation)));
}