
import React from 'react';

import AcCards from './ac-cards.js'
import AcFilter from './ac-filter.js'
import './ac-wtc-app.css';

// function getHemisphere() {
//   // TODO: implement the real check usinggeolocation APIs. 
//   return 'N';
// }

export class AcnhWtcApp extends React.Component {

  // filterNow(list) {
  //   const now = new Date();
  //   const hour = now.getHours();
  //   const isNorthernHemi = getHemisphere() !== 'S';
  //   const month = now.getMonth() + 1;

  //   return list.filter((item) => {
  //     return item.available(isNorthernHemi, month, hour);
  //   });
  // }

  render() {
    // const bugs = this.filterNow(this.props.data.bugs);
    // const fish = this.filterNow(this.props.data.fish);
    
    return (
      <div>
        <h2 className="header">ACNH - What To Catch</h2>
        <AcFilter />
        <AcCards/>
      </div>
    );
  }
}