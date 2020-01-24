import { combineReducers } from 'redux';
import { registration } from './registration_reducer';

const rootReducer = combineReducers({
    registration,
    alerts
});

export default rootReducer;