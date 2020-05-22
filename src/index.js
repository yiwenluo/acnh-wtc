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

  render() {
    console.log();

    const bugs = this.props.data.bugs;
    const fish = this.props.data.fish;

    return (
      <div>
        <AcHead />
        <AcCards bugs={bugs} fish={fish}/>
      </div>
    );
  }
}

const data = new DataStore();

// ========================================

ReactDOM.render(
  <AcnhWTC data={data}/>,
  document.getElementById('root')
);
