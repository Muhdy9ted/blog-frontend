import { takeEvery, all, fork } from "redux-saga/effects";

import * as actionTypes from '../actions/actionTypes';
import { loginSaga } from "./loginSaga";


function* watchLogin(){
    yield all(
        [
            takeEvery(actionTypes.LOGIN_CONSTANTS.LOGIN_STARTS, loginSaga),
        ]
    )
};


export default function* watchAllSagas(){
    yield all([
        fork(watchLogin)
    ])
}