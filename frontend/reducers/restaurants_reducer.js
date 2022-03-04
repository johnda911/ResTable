import {
    RECEIVE_RESTAURANTS,
    RECEIVE_RESTAURANT,
} from '../actions/restaurant_actions';


const RestaurantsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_RESTAURANTS:
            return action.restaurants;
        case RECEIVE_RESTAURANT:
            nextState[action.restaurant.id] = action.restaurant;
            return nextState;
        default:
            return oldState;
    };
};


export default RestaurantsReducer;