import React from "react";
import FormattedDate from "./FormattedDate";
import CurrentTemperature from "./CurrentTemperature";
import "./CurrentInfo.css";

export default function CurrentInfo (props) {
    return (
        <div>
        <h1 className="city">{props.data.city.toUpperCase()}</h1>
        <h2 className="date">
          <FormattedDate date={props.data.date} />
        </h2>
        <div className="row">
          <div className="col-4">
            <ul>
              <li className="description">{props.data.description}</li>
              <li>
                <img
                  src={props.data.iconUrl}
                  alt={props.data.description}
                  className="weather-icon"
                />
              </li>
            </ul>
          </div>
          <div className="col-4">
            <CurrentTemperature celcius={props.data.temperature} />
          </div>
          <div className="col-4">
            <div className="specifications">
              <ul>
                <li>
                  Feels like: <span>{Math.round(props.data.feelsLike)}</span>º
                </li>
                <li>
                  Wind: <span>{Math.round(props.data.wind)}</span> m/s
                </li>
                <li>
                  Humidity: <span>{Math.round(props.data.humidity)}</span>%
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
    )
}
