import { takeLatest, call, put, select } from "redux-saga/effects";

import * as actionTypes from '../actions/types';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* carsWatcher() {
    yield takeLatest(actionTypes.GET_ALL_CARS, workerSaga);
}

async function fetchAllCars(){
    return await fetch("http://localhost:3001/cars");
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
    try {
        const response = yield call(fetchAllCars);
        const responseJson = yield call([response, response.json]);
        const allCars = responseJson.cars;
        yield put({ type: actionTypes.GET_ALL_CARS_SUCCESS, allCars });
    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: actionTypes.GET_ALL_CARS_ERROR, error });
    }

    
}

