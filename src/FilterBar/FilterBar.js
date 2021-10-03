import React from 'react';
import "./FilterBar.css";

function FilterBar(props) {
  return (
    <div className="filterBar">
      <div className="filterSearch">
        <label htmlFor="filterSearch">
          <i className="fas fa-search"></i>
          <input id="filterSearch" type="text" placeholder="Search for a country..." onChange={(e) => props.onSearchQueryChange(e.target.value)}/>
        </label>				
      </div>
      <div className="filterRegion">				
        <select aria-label="Filter Countries By Region" onChange={(e) => props.onRegionChange(e.target.value)}>
					<option hidden defaultValue>Filter by Region</option>
					<option value="All">All</option>
					<option value="Africa">Africa</option>
					<option value="Americas">Americas</option>
					<option value="Asia">Asia</option>
					<option value="Europe">Europe</option>
					<option value="Oceania">Oceania</option>
				</select>
			</div>
    </div>
  )
}

export default FilterBar