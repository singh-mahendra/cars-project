import * as actionTypes from '../actions/types';

const manufacturersReducer = (state = [], action) => {
    switch(action.type){
        case actionTypes.GET_ALL_MANUFACTURERS: {
            break;
        }
        case actionTypes.GET_ALL_MANUFACTURERS_SUCCESS: {
            break;
        }
        case actionTypes.GET_ALL_MANUFACTURERS_ERROR: {
            break;
        }
        default: return state;
    }
}

export default manufacturersReducer;