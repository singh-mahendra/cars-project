import {combineReducers} from 'redux';

import carsReducer from './carsReducer';
import colorsReducer from './colorsReducer';
import manufacturersReducer from './manufacturersReducer';

export default combineReducers({
    cars: carsReducer,
    colors: colorsReducer,
    manufacturers: manufacturersReducer
});