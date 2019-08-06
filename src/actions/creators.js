import * as actionTypes from './types';
export const setSelectedCar = (selectedCarId) => ({type: actionTypes.SELECT_CAR, selectedCarId});

export const getAllCars = (payload) => ({type: actionTypes.GET_ALL_CARS, payload});
export const getAllManufacturers = (payload) => ({type: actionTypes.GET_ALL_MANUFACTURERS, payload});
export const getAllColors = (payload) => ({type: actionTypes.GET_ALL_COLORS, payload});