import React, { useState, useEffect } from 'react';
import './App.css';
import Header from '../Header/Header';
import FilterBar from '../FilterBar/FilterBar';
import CountryList from '../CountryList/CountryList';
import CountryDetails from '../CountryDetails/CountryDetails';
import { countryAbbreviationAndFullName } from '../Utilities/convertMethods';
import { fetchCountries } from '../Utilities/countryApi';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const searchQueryParams = ["name", "capital"];

  useEffect(() => {    
    fetchCountries().then(resp => {
      setCountries(resp);
      setLoading(false);
    }); // eslint-disable-next-line
  }, []);

  function handleRegionChange(region) {
    setRegion(region);
  }

  function handleSearchQueryChange(query) {
    setSearchQuery(query);
  }

  function filterBySearchQuery(countries) {
    const filteredCountries = countries.filter(country => {
      return searchQueryParams.some((param) => {
        const query = searchQuery.trim().toLowerCase();
        const countryParam = country[param];
        return countryParam && countryParam.toString().toLowerCase().indexOf(query) > -1;
      });        
    });
    return filteredCountries;
  }

  function applyFilters(countries) {
    if (region === "All" && searchQuery === "") return countries;
    else if (region !== "All" && searchQuery === "") return countries.filter(country => country.region === region);
    else if (region === "All" && searchQuery !== "") return filterBySearchQuery(countries);
    else if (region !== "All" && searchQuery !== "") return filterBySearchQuery(countries.filter(country => country.region === region));
  }

  return (
    <Router>
      <div className="container">
        <Route exact path="/">
          <Header />
          <FilterBar onRegionChange={handleRegionChange} onSearchQueryChange={handleSearchQueryChange} />
          { loading && (
            <h2 className="loading">
              Loading countries...
            </h2>
          )}
          <CountryList countries={applyFilters(countries)} />
        </Route>
        <Route path="/countries/:name" >
          <CountryDetails abbrevs={countryAbbreviationAndFullName(countries)} />
        </Route>
      </div>
    </Router>    
  );
}

export default App;
