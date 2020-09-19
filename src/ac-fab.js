import React from 'react';
import { connect } from "react-redux";
import { expandFab, collapseFab } from './redux/actions';
import AcFilterMenu from './ac-filter-menu';
import './ac-fab.css';

const collapsedFab = (props) => {
  return (
    <div className="fab collapsed" 
      onClick={props.expandFab}>
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
        <button className="done-button label" onClick={props.collapseFab}>
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