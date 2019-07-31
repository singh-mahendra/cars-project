import * as actionTypes from '../actions/types';

const initialState = {
    cars: [],
    selectedCar: {}
}
const carsReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.GET_ALL_CARS: {
            return state;
        }
        case actionTypes.GET_ALL_CARS_SUCCESS: {
            return state;
        }
        case actionTypes.GET_ALL_CARS_ERROR: {
            return state;
        }
        case actionTypes.GET_CAR_DETAIL: {
            return state;
        }
        case actionTypes.GET_CAR_DETAIL_SUCCESS: {
            return state;
        }
        case actionTypes.GET_CAR_DETAIL_ERROR: {
            return state;
        }
        default: return state;
    }
}

export default carsReducer;