import React from 'react';
import { connect } from "react-redux";
import { getCatchablesByVisibilityFilter } from "./redux/selectors";

import './ac-cards.css'

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const catchables = getCatchablesByVisibilityFilter(state, visibilityFilter);
  return { catchables };
};

const AcCards = ({catchables}) => {
  let cards = [];

  for (const item of catchables) {
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


const AcCard = (props) => {
  return (
    <div className="card">        
      <div className="row">
        <div className="col">
          <div className="name">{props.name}</div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="value">{props.value}</div>
        </div>
        <div className="col">
          <img className="icon" src={props.icon} 
              alt={props.name} />
        </div>
      </div>
      <div className="row"> 
        <div className="metadata location" >
          {props.location}
        </div>
        {props.size && 
            (<div className="metadata size">
              {props.size}
            </div>)
        }
        <div className="metadata time">
          {props.time}
        </div>
        <div className="metadata month">
        {props.month}
        </div>
      </div>
    </div>
  );
}


export default connect(mapStateToProps)(AcCards);