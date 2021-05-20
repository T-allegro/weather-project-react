import React from "react";
import FormattedDate from "./FormattedDate";
import "./CurrentInfo.css";

export default function CurrentInfo (props) {
    return (
        <div>
            <h1 id="city">{props.data.city.toUpperCase()}</h1>
        <h2 id="date">
          <FormattedDate date={props.data.date} />
        </h2>
        <div className="row">
          <div className="col-4">
            <ul>
              <li id="description">{props.data.description}</li>
              <li>
                <img
                  src={props.data.iconUrl}
                  alt={props.data.description}
                  id="icon"
                  className="weather-icon"
                />
              </li>
            </ul>
          </div>
          <div className="col-4">
            <strong id="temperature">{Math.round(props.data.temperature)}</strong>
            <span className="units"> ºC|ºF</span>
          </div>
          <div className="col-4">
            <div className="specifications">
              <ul>
                <li>
                  Feels like: <span id="realfeel">{Math.round(props.data.feelsLike)}</span>º
                </li>
                <li>
                  Wind: <span id="wind">{Math.round(props.data.wind)}</span> m/s
                </li>
                <li>
                  Humidity: <span id="humidity">{Math.round(props.data.humidity)}</span>%
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
    )
}
