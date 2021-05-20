import React, {useState} from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Current.css";

export default function Current(props) {
  const [currentData, setCurrentData] = useState({ready:false});
  function handleResponse (response) {
    setCurrentData({
      ready:true,
      city:response.data.name,
      date:new Date (response.data.dt*1000),
      temperature: response.data.main.temp,
      description:response.data.weather[0].description,
      wind:response.data.wind.speed,
      humidity:response.data.main.humidity,
      feelsLike:response.data.main.feels_like,
      iconUrl:`http://openweathermap.org/img/wn/10d@2x.png`
      
    });
  }

  if (currentData.ready) {
    return (
      <div>
        <h1 id="city">{currentData.city.toUpperCase()}</h1>
        <h2 id="date">
          <FormattedDate date={currentData.date} />
        </h2>
        <div className="row">
          <div className="col-4">
            <ul>
              <li id="description">{currentData.description}</li>
              <li>
                <img
                  src={currentData.iconUrl}
                  alt={currentData.description}
                  id="icon"
                  className="weather-icon"
                />
              </li>
            </ul>
          </div>
          <div className="col-4">
            <strong id="temperature">{Math.round(currentData.temperature)}</strong>
            <span className="units"> ºC|ºF</span>
          </div>
          <div className="col-4">
            <div className="specifications">
              <ul>
                <li>
                  Feels like: <span id="realfeel">{Math.round(currentData.feelsLike)}</span>º
                </li>
                <li>
                  Wind: <span id="wind">{Math.round(currentData.wind)}</span> m/s
                </li>
                <li>
                  Humidity: <span id="humidity">{Math.round(currentData.humidity)}</span>%
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );

  } else {
    const apiKey = "f2307cbce532cfdeb3168c7d625e3421"
    let units ="metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=${units}&appid=${apiKey}`;
  
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
  
}
  