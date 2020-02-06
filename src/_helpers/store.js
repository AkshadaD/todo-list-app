import { createStore, applyMiddleware} from 'redux';
import rootReducer from '../_reducers/rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;