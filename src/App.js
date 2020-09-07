import React, { useState, useEffect } from "react";
import "./App.css";
import { FormControl, Select, MenuItem } from "@material-ui/core";
function App() {
	const [countries, setCountries] = useState(["USA", "UK", "Myanmar"]);

	useEffect(() => {
		const getCountriesData = async () => {
			await fetch("https://disease.sh/v3/covid-19/countries")
				.then((response) => response.json())
				.then((data) => {
					const countries = data.map((country) => ({
						name: country.country,
						value: country.countryInfo.iso2
					}));

					setCountries(countries);
				});
		};
		getCountriesData();
	}, []);
	return (
		<div className="app">
			<div className="app__header">
				<h1>Convid-19 TRACKER</h1>
				<FormControl className="app__dropdown">
					<Select variant="outlined" value="abc">
						{countries.map((country) => (
							<MenuItem value={country.value}>{country.name}</MenuItem>
						))}
						{/* <MenuItem>WorldWide</MenuItem>
						<MenuItem>WorldWide</MenuItem>
						<MenuItem>WorldWide</MenuItem> */}
					</Select>
				</FormControl>
			</div>

			{/* Header */}
			{/* Title dropdown */}

			{/* InfoBox */}
			{/* InfoBox */}
			{/* InfoBox */}

			{/* Table */}
			{/* Graph */}

			{/* Map */}
		</div>
	);
}

export default App;
