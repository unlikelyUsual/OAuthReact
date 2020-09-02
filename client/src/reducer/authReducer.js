
import  * as actionType  from '../actions/actionTypes';

const initialState = {
    isAuthenticated : false,
    user : {}
};

const reducer = (state = initialState,action) => {

    switch(action.type){
        case actionType.LOGIN_USER:
         return  {
             ...state,
             isAuthenticated : true,
             user : action.payload.user
         }
        default:
            return state;
    }

}

export default reducer;

