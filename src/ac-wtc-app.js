
import React from 'react';

import AcCards from './ac-cards.js'
import AcFab from './ac-fab.js'
import './ac-wtc-app.css';

export class AcnhWtcApp extends React.Component {

  render() {
    
    return (
      <div>
        <h2 className="header">ACNH - What To Catch</h2>
        <AcCards/>
        <AcFab />
      </div>
    );
  }
}