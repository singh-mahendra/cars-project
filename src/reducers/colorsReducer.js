import * as actionTypes from '../actions/types';
const initialState = {
    allColors: []
};
const colorsReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.GET_ALL_COLORS: {
            return state;
        }
        case actionTypes.GET_ALL_COLORS_SUCCESS: {
            const newState = {
                ...state, 
                allColors: action.responseJson.colors
            }
            return newState;
        }
        case actionTypes.GET_ALL_COLORS_ERROR: {
            return state;
        }
        default: return state;
    }
}

export default colorsReducer;