
import  * as actionType  from '../actions/actionTypes';

const initialState = {
    errors : {}
};

const reducer = (state = initialState,action) => {

    switch(action.type){
        case actionType.GET_ERROR:
         return  {
             errors : action.payload
         }
         case actionType.CLEAR_ERROR:
            return  {
                errors : {}
            }
        default:
            return state;
    }

}

export default reducer;

