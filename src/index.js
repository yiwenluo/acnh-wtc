import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store'

import {AcnhWtcApp} from './ac-wtc-app.js'
import './index.css';


// ========================================

ReactDOM.render(
  <Provider store={store}>
    <AcnhWtcApp/>
  </Provider>,
  document.getElementById('root')
);
