import * as actionTypes from '../actions/types';

const initialState = {
    cars: [],
    selectedCar: {},
    totalPageCount: 0,
    totalCarsCount: 0,
    totalPages:0
}
const carsReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.GET_ALL_CARS: {
            return state;
        }
        case actionTypes.GET_ALL_CARS_SUCCESS: {
            const newState = {...state, 
                cars: action.responseJson.cars,
                totalPageCount: action.responseJson.totalPageCount,
                totalCarsCount: action.responseJson.totalCarsCount,
                totalPages: Math.ceil(action.responseJson.totalCarsCount/ action.responseJson.totalPageCount)    
            };
            return newState;
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