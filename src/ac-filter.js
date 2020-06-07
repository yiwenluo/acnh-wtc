import React from 'react';
import { connect } from "react-redux";
import { VISIBILITY_FILTERS } from "./constants";
import { setFilter } from './redux/actions';
import './ac-filter.css';

const AcFilter = (props) => {

  return (
    <div className="filters">
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <span key={`visibility-filter-${currentFilter}`}
            className={
              'filter ' + (
                currentFilter === props.activeFilter ? 'selected' : '')
            } 
            onClick={() => {
              props.setFilter(currentFilter);
            }}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return { activeFilter: state.visibilityFilter };
};

const mapDispatchToProps = {
  setFilter,
}

// export default VisibilityFilters;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AcFilter);