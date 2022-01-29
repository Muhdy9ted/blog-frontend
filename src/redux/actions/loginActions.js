import * as actionTypes from './actionTypes';

export const loginStarts = ( userData ) => {
    console.log(userData);
    return {
        type: actionTypes.LOGIN_CONSTANTS.LOGIN_STARTS,
        userData: userData
    }
}

export const loginSuccessful= ( userData ) => {
    console.log(userData);
    return {
        type: actionTypes.LOGIN_CONSTANTS.LOGIN_SUCCESSFUL,
        userData: {...userData}
    }
}