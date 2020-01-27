import { combineReducers } from 'redux';
import { registration } from './registration_reducer';
import alerts from './alert_reducer';

const rootReducer = combineReducers({
    registration,
    alerts
});

export default rootReducer;