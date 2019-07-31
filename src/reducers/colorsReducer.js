import * as actionTypes from '../actions/types';

const colorsReducer = (state = [], action) => {
    switch(action.type){
        case actionTypes.GET_ALL_COLORS: {
            break;
        }
        case actionTypes.GET_ALL_COLORS_SUCCESS: {
            break;
        }
        case actionTypes.GET_ALL_COLORS_ERROR: {
            break;
        }
        default: return state;
    }
}

export default colorsReducer;