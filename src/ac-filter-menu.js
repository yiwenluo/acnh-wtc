import React from 'react';
import { connect } from "react-redux";
import AcFilter from './ac-filter';
import { setFilterActive } from './redux/actions';
import './ac-filter-menu.css';


const AcFilterMenu = (props) => {

  const filters = props.filters.map((filter) => {
    return (
      <AcFilter 
          key={filter.name}
          name={filter.name}
          options={filter.options}
          activeOption={filter.activeOption} 
          setActive={props.setFilterActive}/>
    );
  });
  return (
    <div className="filter-menu">
      {filters}
    </div>
  )
}

const mapStateToProps = state => {
  const { availabilityFilter, typeFilter} = state; 
  return {
    filters: [typeFilter, availabilityFilter],
  };
};

const mapDispatchToProps = {
  setFilterActive,
}

export default connect(mapStateToProps, mapDispatchToProps)(AcFilterMenu);