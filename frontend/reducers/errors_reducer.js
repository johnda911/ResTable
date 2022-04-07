import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
// import SubmitFormReducer from './submit_form_reducer';

export default combineReducers({
    login: SessionErrorsReducer,
    // submitForm: SubmitFormReducer
});