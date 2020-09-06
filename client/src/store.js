import {createStore , applyMiddleware , compose} from 'redux';
import combineReducer from './reducer/combinedReducer';
import thunk from 'redux-thunk';

const middlewares = [thunk];

export default createStore(combineReducer,{},compose( applyMiddleware(...middlewares),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));