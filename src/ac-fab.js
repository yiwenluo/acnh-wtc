import React from 'react';
import { connect } from "react-redux";
import { expandFab, collapseFab } from './redux/actions';
import AcFilterMenu from './ac-filter-menu';
import './ac-fab.css';


const filterIcon = () => {
  return (
    <div className="filter-icon">
      <svg xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" fill="black" 
          width="24px" height="24px">
        <g>
          <path d="M0,0h24 M24,24H0" fill="none"/>
          <path d="M7,6h10l-5.01,6.3L7,6z M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6 c0,0,3.72-4.8,5.74-7.39C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z"/>
          <path d="M0,0h24v24H0V0z" fill="none"/>
        </g>
      </svg>
    </div>
  );
}

const collapsedFab = (props) => {
  return (
    <div className="fab collapsed" 
      onClick={props.expandFab}>
      {filterIcon()}
      <span className="label">
        Filter
      </span>
    </div>
  );
}

const expandedFab = (props) => {
  return (
    <div className="fab expanded">
      <AcFilterMenu />
      <div className="button-row">
        <button className="done-button" onClick={props.collapseFab}>
          Done
        </button>
      </div>
    </div>
  );
}

const AcFab = (props) => {
  const fabContent = props.collapsed ? 
    collapsedFab(props) : expandedFab(props);
  return (
    fabContent
  );
}

const mapStateToProps = state => {
  return {
    activeFilter: state.filter, 
    collapsed: state.fab.collapsed,
  };
}

const mapDispatchToProps = {
  collapseFab,
  expandFab,
};

export default connect(mapStateToProps, mapDispatchToProps)(AcFab);