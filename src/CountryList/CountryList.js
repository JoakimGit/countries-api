import React from 'react';
import "./CountryList.css"
import { Link } from 'react-router-dom';

function CountryList(props) {
  return (
    <div className="countryList">
      {props.countries.map((country) => {
        return <CountryCard key={country.numericCode} country={country} />
      })}
    </div>
	)
}

function CountryCard(props) {
  const { name, flag, population, region, capital } = props.country;

  return (
    <div className="countryCard">
      <Link to={`/countries/${name}`}>
        <div className="flag-container">
          <img src={ flag } alt={ name }></img>
        </div>
      </Link>
      <div className="cardTextBox">
        <h3>{ name }</h3>
        <p><span>Population:</span> { population.toLocaleString('en-US') }</p>
        <p><span>Region:</span> { region }</p>
        <p><span>Capital:</span> { capital }</p>
      </div>
    </div>
	)
}

export default CountryList