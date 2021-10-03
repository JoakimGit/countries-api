export async function fetchCountries() {
	try {      
		const response = await fetch("https://restcountries.com/v2/all");
		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		console.log("In countryApi file:", error);
		throw new Error(error);
	}
}

export async function fetchCountry(name) {
	try {        
		const response = await fetch(`https://restcountries.com/v2/name/${name}`);
		const country = await response.json();
		return country;
	} catch (error) {
		throw new Error(error);
	}
}