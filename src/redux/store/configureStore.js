import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { persistStore } from 'redux-persist';

import rootReducer from '../reducers';
import watchAllSagas from '../sagas';

export default function configureStore(){
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

    sagaMiddleware.run(watchAllSagas);

    const persistor = persistStore(store);

    return { store, persistor };
}