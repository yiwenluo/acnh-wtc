import React from 'react';
import { connect } from "react-redux";
import './ac-filter.css';

const AcFilterOption = (props) => {
  return (
    <div className={`filter-option ${props.active ? 'active' : ''}`}
      onClick={() => {
        props.setOptionActive(props.option)
      }}>
      {props.option}
    </div>
  );
}

const AcFilter = (props) => {
  const options = props.options.map((opt) => {
    return (
      <AcFilterOption 
        key={`filter-option-${opt}`} 
        option={opt}
        active={opt === props.activeOption}
        setOptionActive={(option) => {
          props.setActive(props.name, option);
        }}
        />
    );
  })
  return (
    <div className="filter-options">
      {options}
    </div>
  );
};

export default connect(
  null,
  null
)(AcFilter);