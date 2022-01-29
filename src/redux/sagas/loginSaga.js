import { put } from 'redux-saga/effects';

import * as actions from '../actions';

export function* loginSaga( action ){
    console.log(action);
    const userData = {
        email: 'me@you.com',
        firstname: 'moohdy',
        token: 'ksaljf;alja980a8ua0fadgafasfd',
        userId: 'kkk443334klal',
        role: 'writer'
    }
    yield put(actions.loginSuccessful(userData));
}