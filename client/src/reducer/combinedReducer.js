import {combineReducers} from 'redux';
import authReducer from './authReducer'
import errorReducer from './errorReducer'

const rootReduce = combineReducers({
 auth : authReducer,
 error : errorReducer
})

export default rootReduce;