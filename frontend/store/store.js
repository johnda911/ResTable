import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root_reducer';

/*
Export a `configureStore` function that takes in a `preloadedState` parameter
and returns a store created with the `RootReducer`, `preloadedState`, and
`thunk` middleware.
*/
const configureStore = (preloadedState = {}) => {
    return createStore(RootReducer, preloadedState, applyMiddleware(thunk, logger));
}

export default configureStore;