import axios from 'axios';
import {SET_USER,GET_ERROR,CLEAR_ERROR} from './actionTypes'

export const updateUser = (data,history) => dispatch => {
    axios.post("/api/user/update",data)
    .then(res=>{
      dispatch(dispatchUser(res.data));
      history.push('/account');
    })
    .catch(err=>{
        if(err.response)dispatch(dispatchError(err.response.data))
        else console.log(err);
    })
}

export const dispatchUser = user => ({
    type : SET_USER,
    payload : user
});


export const dispatchError = error => ({
    type : GET_ERROR,
    payload : error
});

export const dispatchClearError = () => ({
    type : CLEAR_ERROR,
    payload : {}
})