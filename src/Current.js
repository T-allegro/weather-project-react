import React from "react";
import "./Current.css";

export default function Current() {
    return (
      <div>
        <h1 id="city">MATOSINHOS</h1>
        <h2 id="date">Friday, 23 Apr 15:25</h2>
        <div className="row">
          <div className="col-4">
            <ul>
              <li id="description">Moderate Rain</li>
              <li>
                <img
                  src="http://openweathermap.org/img/wn/10d@2x.png"
                  alt=""
                  id="icon"
                  className="weather-icon"
                />
              </li>
            </ul>
          </div>
          <div className="col-4">
            <strong id="temperature">20</strong>
            <span className="units"> ºC|ºF</span>
          </div>
          <div className="col-4">
            <div className="specifications">
              <ul>
                <li>
                  Feels like: <span id="realfeel">20</span>º
                </li>
                <li>
                  Wind: <span id="wind">5</span> m/s
                </li>
                <li>
                  Humidity: <span id="humidity">72</span>%
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  