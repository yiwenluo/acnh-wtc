
import React from 'react';

import AcCards from './ac-cards.js'
import AcFab from './ac-fab.js'
import './ac-wtc-app.css';
import header from './assets/header.png';

export class AcnhWtcApp extends React.Component {

  render() {
    
    return (
      <div class="app-container">
        <img className="header" src={header}></img>
        <AcCards/>
        <AcFab />
      </div>
    );
  }
}