import * as RestaurantAPIUtil from '../utils/restaurant_api_util';

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';

const receiveRestaurants = restaurants => ({
    type: RECEIVE_RESTAURANTS,
    restaurants
});
const receiveRestaurant = restaurant => ({
    type: RECEIVE_RESTAURANT,
    restaurant
});

export const requestRestaurants = () => dispatch => {
    return RestaurantAPIUtil.fetchRestaurants()
        .then(restaurants => dispatch(receiveRestaurants(restaurants)));
}

export const requestRestaurant = (restaurantId) => dispatch => {
    return ReportAPIUtil.fetchRestaurant(restaurantId)
        .then(restaurant => dispatch(receiveRestaurant(restaurant)));
}
