import * as actionTypes from '../actions/actionTypes';

const initialState = {
    currentUser: {
        email: null,
        firstname: null,
        token: null,
        userId: null,
        role: null
    }
};

const loginSuccessful = ( state, action ) => {
    return {...state, currentUser: {...action.userData}}
}

const reducer = ( state = initialState, action ) => {
    switch( actionTypes ){
        case actionTypes.LOGIN_CONSTANTS.LOGIN_SUCCESSFUL: return loginSuccessful(state, action);
        default: return state;
    }
};

export default reducer;
