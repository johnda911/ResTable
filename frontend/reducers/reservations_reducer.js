import {
    RECEIVE_RESERVATION,
    RECEIVE_RESERVATIONS,
    REMOVE_RESERVATION,
} from '../actions/reservation_actions';

const ReservationsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        // case RECEIVE_RESERVATIONS:
        //     return action.reservations;
        case RECEIVE_RESERVATION:
            nextState[action.reservation.id] = action.reservation;
            return nextState;
        case REMOVE_RESERVATION:
            nextState[action.reservationId].cancelled = true;
            // delete nextState[action.reservationId];
            return nextState;
        default:
            return oldState;
    };
};


export default ReservationsReducer;