import * as actionTypes from '../actions/types';
const initialState = {
    allManufacturers: []
};

const manufacturersReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.GET_ALL_MANUFACTURERS: {
            return state;
        }
        case actionTypes.GET_ALL_MANUFACTURERS_SUCCESS: {
            const newState = {
                ...state, 
                allManufacturers: action.responseJson.manufacturers
            }
            return newState;
        }
        case actionTypes.GET_ALL_MANUFACTURERS_ERROR: {
            return state;
        }
        default: return state;
    }
}

export default manufacturersReducer;