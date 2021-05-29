import React, {useState} from "react";
import axios from "axios";
import CurrentInfo from "./CurrentInfo";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready:false});
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse (response) {
    setWeatherData({
      ready:true,
      coordinates:response.data.coord,
      city:response.data.name,
      date:new Date (response.data.dt*1000),
      temperature: response.data.main.temp,
      description:response.data.weather[0].description,
      wind:response.data.wind.speed,
      humidity:response.data.main.humidity,
      feelsLike:response.data.main.feels_like,
      iconUrl:`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function showLocation(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiKey = "f2307cbce532cfdeb3168c7d625e3421";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
    
    axios.get(apiUrl).then(handleResponse);
  }

  function currentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showLocation);
  }

  function search(){
    const apiKey = "f2307cbce532cfdeb3168c7d625e3421"
    let units ="metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
  
    axios.get(apiUrl).then(handleResponse);

  }
  if (weatherData.ready) {
    return (
      <div>
        <form id="search-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="City..."
              className="form-control"
              autoComplete="off"
              id="city-input"
              onChange={handleCityChange}
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              value="Search"
              className="btn btn-outline-dark"
            />
          </div>
          <div className="col-3">
            <button onClick={currentLocation}
              type="button"
              id="current-city"
              className="btn btn-outline-dark"
            >
              Current City
            </button>
          </div>
        </div>
      </form>
      <CurrentInfo data={weatherData}/>  
      <Forecast coordinates={weatherData.coordinates} />
      </div>
    );

  } else {
    search();
    return "Loading...";
  }
  
}
  