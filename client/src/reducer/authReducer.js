
import  * as actionType  from '../actions/actionTypes';

const initialState = {
    isAuthenticated : false,
    user : {}
};

const reducer = (state = initialState,action) => {

    switch(action.type){
        case actionType.SET_USER:
         return  {
             ...state,
             isAuthenticated : true,
             user : action.payload
         }
        default:
            return state;
    }

}

export default reducer;

