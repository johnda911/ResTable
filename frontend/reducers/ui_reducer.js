import { combineReducers } from 'redux';
// import filters from './filters_reducer';
import ModalReducer from './modal_reducer';
import searchReducer from './search_reducer';

export default combineReducers({
    //   filters,
    modal: ModalReducer,
    search: searchReducer,
});
