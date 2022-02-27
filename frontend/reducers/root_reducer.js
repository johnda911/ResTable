// import ReportsReducer from './reports_reducer';
import SessionReducer from './session';

import { combineReducers } from 'redux';

const RootReducer = combineReducers({
    // entities: entitiesReducer,
    session: SessionReducer

});

export default RootReducer;