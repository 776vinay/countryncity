import React, { useState } from "react";
import data from "./data.json";

function Dropdowns() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedCity("");
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const getCities = () => {
    const country = data.countries.find((c) => c.name === selectedCountry);
    return country ? country.cities : [];
  };

  return (
    <div>
      <label htmlFor="country">Select a country:</label>
      <select
        id="country"
        value={selectedCountry}
        onChange={handleCountryChange}
      >
        <option value="">-- Select a country --</option>
        {data.countries.map((c) => (
          <option key={c.name} value={c.name}>
            {c.name}
          </option>
        ))}
      </select>

      <label htmlFor="city">Select a city:</label>
      <select
        id="city"
        value={selectedCity}
        onChange={handleCityChange}
        disabled={!selectedCountry}
      >
        <option value="">-- Select a city --</option>
        {getCities().map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>

      <div>
        <label htmlFor="selected-country">Selected country:</label>
        <input
          id="selected-country"
          type="text"
          readOnly
          value={selectedCountry}
        />
      </div>

      <div>
        <label htmlFor="selected-city">Selected city:</label>
        <input id="selected-city" type="text" readOnly value={selectedCity} />
      </div>
    </div>
  );
}

export default Dropdowns;
