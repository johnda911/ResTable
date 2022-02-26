// import ReportsReducer from './reports_reducer';
import SessionReducer from './session';

import { combineReducers } from 'redux';

const RootReducer = combineReducers({
    session: SessionReducer
    // reports: ReportsReducer
});

export default RootReducer;