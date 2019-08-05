import { call, put } from "redux-saga/effects";

import * as actionTypes from '../actions/types';
import {fetchCarsFromAPI} from '../common/util';

// worker saga: makes the api call when watcher saga sees the action
export function* getAllCarsSaga(action) {
    try {
        const response = yield call(fetchCarsFromAPI, action.payload);
        const responseJson = yield call([response, response.json]);
        yield put({ type: actionTypes.GET_ALL_CARS_SUCCESS, responseJson });
    } catch (error) {
        yield put({ type: actionTypes.GET_ALL_CARS_ERROR, error });
    }
}

export function* sortCarsSaga() {
    try {
        const response = yield call(fetchCarsFromAPI);
        const responseJson = yield call([response, response.json]);
        const allCars = responseJson.cars;
        yield put({ type: actionTypes.SORT_CARS_SUCCESS, allCars });
    } catch (error) {
        yield put({ type: actionTypes.SORT_CARS_ERROR, error });
    }
}

export function* filterCarsSaga() {
    try {
        const response = yield call(fetchCarsFromAPI);
        const responseJson = yield call([response, response.json]);
        const allCars = responseJson.cars;
        yield put({ type: actionTypes.FILTER_CARS_SUCCESS, allCars });
    } catch (error) {
        yield put({ type: actionTypes.FILTER_CARS_SUCCESS, error });
    }
}

