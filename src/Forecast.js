import React from "react";
import "./Forecast.css";

export default function Forecast() {
    return (
      <div className="weather-forecast" id="forecast">
        <div className="row">
          <div className="col">
            <h3 id="forecast-date">Friday</h3>
            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
            <div className="weather-forecast-temperature">
              <span className="forecast-temperature-min">14</span>º|
              <span class="forecast-temperature-max">19</span>º
            </div>
          </div>
          <div className="col">
            <h3 id="forecast-date">Saturday</h3>
            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
            <div className="weather-forecast-temperature">
              <span className="forecast-temperature-min">14</span>º|
              <span class="forecast-temperature-max">18</span>º
            </div>
          </div>
          <div className="col">
            <h3 id="forecast-date">Sunday</h3>
            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
            <div className="weather-forecast-temperature">
              <span className="forecast-temperature-min">14</span>º|
              <span class="forecast-temperature-max">18</span>º
            </div>
          </div>
          <div className="col">
            <h3 id="forecast-date">Monday</h3>
            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
            <div className="weather-forecast-temperature">
              <span className="forecast-temperature-min">14</span>º|
              <span class="forecast-temperature-max">17</span>º
            </div>
          </div>
          <div className="col">
            <h3 id="forecast-date">Tuesday</h3>
            <img src="http://openweathermap.org/img/wn/04d@2x.png" alt="" />
            <div className="weather-forecast-temperature">
              <span className="forecast-temperature-min">14</span>º|
              <span class="forecast-temperature-max">17</span>º
            </div>
          </div>
        </div>
      </div>
    );
  }
  