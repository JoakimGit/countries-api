export function countryAbbreviationAndFullName(countries) {
	if (countries.length) {
		const abbrToFullName = {};
		countries.map(country => abbrToFullName[country.alpha3Code] = country.name);
		return abbrToFullName;
	}
}