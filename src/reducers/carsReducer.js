import * as actionTypes from '../actions/types';

const initialState = {
    cars: [],
    selectedCar: {},
    totalPageCount: 0,
    totalCarsCount: 0,
    totalPages:0,
    isLoading: false
}
const carsReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.GET_ALL_CARS: {
            return {...state, isLoading: true};
        }
        case actionTypes.GET_ALL_CARS_SUCCESS: {
            const newState = {...state, 
                cars: action.responseJson.cars,
                totalPageCount: action.responseJson.totalPageCount,
                totalCarsCount: action.responseJson.totalCarsCount,
                totalPages: action.responseJson.totalPageCount,
                isLoading: false    
            };
            return newState;
        }
        case actionTypes.GET_ALL_CARS_ERROR: {
            return {...state, isLoading: false};
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
        
        case actionTypes.SELECT_CAR: {
            const selectedCar = state.cars.find((item) => {
                return item.stockNumber == action.selectedCarId;
            })
            const newState = {
                ...state,
                selectedCar: selectedCar
            }
            return newState;
        }
        default: return state;
    }
}

export default carsReducer;