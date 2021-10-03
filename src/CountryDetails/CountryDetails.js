import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import Header from '../Header/Header';
import { fetchCountry } from '../Utilities/countryApi';
import "./CountryDetails.css";

function CountryDetails(props) {
	const [country, setCountry] = useState();
	const { name } = useParams();

	useEffect(() => {
		fetchCountry(name).then(resp => setCountry(resp[0]));
  }, [name]);

	return (
		<>
			<Header />
			{ country &&
				<section className="countryDetails">
					<div className="btn-back">
						<Link to="/">
							<i className="fas fa-arrow-left"></i>Back
						</Link>
					</div>
					<div className="countryCard">
						<div className="flag-container">
							<img src={country.flag} alt={country.name}></img>
						</div>
						<div className="cardTextBox">
							
							<h2 className="detailsBoxHeader">{ country.name }</h2>

							<div className="cardDetailsText">
								<div>
									<p><span>Native Name:</span> { country.nativeName }</p>
										<p><span>Population:</span> { (country.population).toLocaleString('en-US') }</p>
										<p><span>Region:</span> { country.region }</p>
										<p><span>Sub Region:</span> { country.subregion }</p>
										<p className="margin-bot-md"><span>Capital:</span> { country.capital }</p>
								</div>
								
								<div>
									<p><span>Top Level Domain:</span> { country.topLevelDomain[0] }</p>
									<p><span>Currencies:</span> { country.currencies && (country.currencies.map(curr => curr.name)).join(", ") }</p>
									<p><span>Languages:</span> { (country.languages.map(lang => lang.name)).join(", ") }</p>
								</div>
							</div>
							
							<div className="borders">
								<p className="borderCountriesHeader">Border Countries:</p>
								<div className="borderCountries">
									{ country.borders
										?	country.borders.map(country => {
												return (
													props.abbrevs && 
													<Link to={`/countries/${props.abbrevs[country]}`} key={country}>
														<div className="borderCountry">
															{ props.abbrevs[country] }
														</div>
													</Link>											
												)
												})
										: <div className="no-borders">None</div>
									}
								</div>
							</div>
							
						</div>
					</div>
				</section>
			}
		</>
	);
}

/* function BorderCountryBox(props) {
	return (
		<div className="borderCountry">
			{ getCountryFullName(props.name) }
		</div>
	)
} */

export default CountryDetails;