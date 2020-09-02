import {createStore , compose} from 'redux';
import combineReducer from './reducer/combinedReducer';


export default createStore(combineReducer,{},compose( window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));