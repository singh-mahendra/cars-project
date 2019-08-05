import { takeLatest } from "redux-saga/effects";

import * as actionTypes from '../actions/types';
import {getAllCarsSaga,sortCarsSaga,filterCarsSaga} from './carsSagas';

export function* getAllCarsWatcher() {
    yield takeLatest(actionTypes.GET_ALL_CARS, getAllCarsSaga);
}

export function* sortCarsWatcher() {
    yield takeLatest(actionTypes.SORT_CARS, sortCarsSaga);
}

export function* filterCarsWatcher() {
    yield takeLatest(actionTypes.FILTER_CARS, filterCarsSaga);
}

