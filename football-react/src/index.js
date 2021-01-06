import './styles/styles.css';
import './styles/all.css'
import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom'
import App from './components/app'
import ErrorBoundry from './components/error-boundry'
import {store,persistor} from './store'
import {PersistGate} from 'redux-persist/integration/react'

ReactDOM.render(
  <Provider store = {store}>
    <ErrorBoundry>
      <Router>
        <PersistGate persistor = {persistor}>
          <div className = 'parallax'></div>
          <App/>
        </PersistGate>
      </Router>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('main'),
);