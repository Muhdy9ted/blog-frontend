import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import loginReducer from './loginReducer';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['loginReducer']
}

const rootReducer = combineReducers({
    loginReducer: loginReducer
});

export default persistReducer(persistConfig, rootReducer);