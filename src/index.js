import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { configureStore } from './redux/store';

// import 'bootstrap/scss/bootstrap.scss';
import './scss/styles.scss';
import App from './App';

const store = configureStore();


ReactDOM.render(
  <Provider store={store.store}>
    <React.StrictMode>
      <BrowserRouter>
      <PersistGate persistor={store.persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
