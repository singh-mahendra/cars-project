import { call, put } from "redux-saga/effects";

import * as actionTypes from '../actions/types';
import {fetchManufacturersFromAPI} from '../common/util';

// worker saga: makes the api call when watcher saga sees the action
export function* getAllManufacturersSaga(action) {
    try {
        const response = yield call(fetchManufacturersFromAPI, action.payload);
        const responseJson = yield call([response, response.json]);
        yield put({ type: actionTypes.GET_ALL_MANUFACTURERS_SUCCESS, responseJson });
    } catch (error) {
        yield put({ type: actionTypes.GET_ALL_MANUFACTURERS_ERROR, error });
    }
}