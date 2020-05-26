import React from 'react';
import ReactDOM from 'react-dom';
import {DataStore} from './data-store.js';
// import {AcControls} from './ac-controls.js'
import {AcCards} from './ac-cards.js'
import './index.css';

class AcHead extends React.Component {
  render() {
    return (
      <h2 className="header">ACNH - What To Catch</h2>
    );
  }
}

class AcnhWTC extends React.Component {

  filterNow(list) {
    const now = new Date();
    const hour = now.getHours();
    const isNorthernHemi = getHemisphere() !== 'S';
    const month = now.getMonth() + 1;

    return list.filter((item) => {
      return item.available(isNorthernHemi, month, hour);
    });
  }

  render() {
    const bugs = this.filterNow(this.props.data.bugs);
    const fish = this.filterNow(this.props.data.fish);
    
    return (
      <div>
        <AcHead />
        <AcCards bugs={bugs} fish={fish}/>
      </div>
    );
  }
}

const data = new DataStore();

function getHemisphere() {
  // TODO: implement the real check usinggeolocation APIs. 
  return 'N';
}

// ========================================

ReactDOM.render(
  <AcnhWTC data={data}/>,
  document.getElementById('root')
);
