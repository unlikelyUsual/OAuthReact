import {combineReducers} from 'redux';
import authReducer from './authReducer'

const rootReduce = combineReducers({
 auth : authReducer
})

export default rootReduce;