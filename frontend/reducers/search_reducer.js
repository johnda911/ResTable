import { RECEIVE_CUSINE } from '../actions/search_actions';

export default function searchReducer(oldState = "", action) {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_CUSINE:
            return action.search;
        default:
            return oldState;
    }
}