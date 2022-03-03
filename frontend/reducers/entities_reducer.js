import { combineReducers } from 'redux';

import RestaurantsReducer from './restaurants_reducer';
// import ReservationsReducer from './reservations_reducer';
// import UsersReducer from './users_reducer';
// import FavoritesReducer from './favorites_reducer';
// import CommentsReducer from './comments_reducer';

export default combineReducers({
    // users: UsersReducer,
    restaurants: RestaurantsReducer,
    // reservations: ReservationsReducer,
    // favorites: FavoritesReducer,
    // comments: CommentsReducer
});
