import { useEffect, useState } from "react";
import "./App.css"

function LoadCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])

  return (
    <div className="all-country-container">
      <h3>All Countires</h3>
      <div className="country-container">
        {
          countries.map(country => <Country

            country = { country}
            key = { country.cca3}
            // name={country.name}
            // capital={country.capital}
            // area={country.area}
            // flags={country.flags.svg}

          />)
        }
      </div>

    </div>
  )
}

function Country(props) {
  const {name, flags, area, capital,} = props.country
  return (
    <div className="item">
      <div className="info">
        <h2>Name:- {name?.common ? name.common : " N/A"}</h2>
        <h4>Official Name:- {name?.official ? name.official : " N/A"}</h4>
        <p>Capital:- {capital ? capital : " N/A"}</p>
        {/* <p>Language:- {languages ? languages : " N/A"}</p> */}
        <p>Area : {area ? area : 'N/A'}</p>
      </div>
      <img src={flags.svg}  alt= " Flag"/>
    </div>
  )

}


function App() {
  return (
    <div>
      <LoadCountries />
    </div>
  );
}

export default App;
