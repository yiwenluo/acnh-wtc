
import React from 'react';

import AcCards from './ac-cards.js'
import AcFab from './ac-fab.js'
import './ac-wtc-app.css';
// import header from './assets/header.svg';
import { ReactComponent as Header } from './assets/header.svg';

export class AcnhWtcApp extends React.Component {

  render() {
    
    return (
      <div class="app-container">
        <Header className="header"/>
        <AcCards/>
        <AcFab />
      </div>
    );
  }
}