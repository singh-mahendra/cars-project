import { call, put } from "redux-saga/effects";

import * as actionTypes from '../actions/types';
import {fetchColorsFromAPI} from '../common/util';

// worker saga: makes the api call when watcher saga sees the action
export function* getAllColorsSaga(action) {
    try {
        const response = yield call(fetchColorsFromAPI, action.payload);
        const responseJson = yield call([response, response.json]);
        yield put({ type: actionTypes.GET_ALL_COLORS_SUCCESS, responseJson });
    } catch (error) {
        yield put({ type: actionTypes.GET_ALL_COLORS_ERROR, error });
    }
}