import {
    RECEIVE_USER,
} from '../actions/user_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session';


const UsersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_USER:
            nextState[action.user.id] = action.user;
            return nextState;
        case LOGOUT_CURRENT_USER:
            nextState = {};
            return nextState;
        default:
            return oldState;
    };
};


export default UsersReducer;