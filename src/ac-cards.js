import React from 'react';
import './ac-cards.css'

export class AcCards extends React.Component {

  render() {
    let cards = [];

    const catchables = [].concat(this.props.fish).concat(this.props.bugs);
    const sorted = catchables.sort((a, b) => {
      return b.value - a.value;
    });

    for (const item of sorted) {
      cards.push(<AcCard 
          key={item.name}
          name={item.name} 
          icon={item.icon} 
          location={item.location} 
          value={item.value} 
          size={item.getDisplaySize()}
          time={item.getDisplayTime()}
          month={item.getDisplayMonth()}/>
      );
    }
    
    return (
      <div className="card-list">
        {cards}
      </div>
    );
  }
}

class AcCard extends React.Component {

  render() {
    return (
      <div className="card">        
        <div className="row">
          <div className="col">
            <div className="name">{this.props.name}</div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="value">{this.props.value}</div>
          </div>
          <div className="col">
            <img className="icon" src={this.props.icon} 
                alt={this.props.name} />
          </div>
        </div>
        <div className="row"> 
          <div className="metadata location" >
            {this.props.location}
          </div>
          {this.props.size && 
              (<div className="metadata size">
                {this.props.size}
              </div>)
          }
          <div className="metadata time">
            {this.props.time}
          </div>
          <div className="metadata month">
          {this.props.month}
          </div>
        </div>
      </div>
    );
  }
}