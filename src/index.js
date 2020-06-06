import React from 'react';
import ReactDOM from 'react-dom';
import {DataStore} from './data-store.js';
// import {AcControls} from './ac-controls.js'
import {AcnhWtcApp} from './ac-wtc-app.js'
import './index.css';

const data = new DataStore();

// ========================================

ReactDOM.render(
  <AcnhWtcApp data={data}/>,
  document.getElementById('root')
);
