import axios from "axios";
import React, {useState, useEffect} from "react";
import "./Forecast.css";
import ForecastDaily from "./ForecastDaily";

export default function Forecast(props) {
  let [loaded, setLoaded]=useState(false);
  let [forecast, setForecast]=useState(null);

  useEffect(() => {
    setLoaded(false);
  },[props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);

  }

  function Load(){
    let apiKey="f2307cbce532cfdeb3168c7d625e3421";
    let longitude=props.coordinates.lon;
    let latitude=props.coordinates.lat;
    let units ="metric";
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded){
  return (
      <div className="weather-forecast" id="forecast">
        <div className="row">
          {forecast.map(function(dailyForecast, index){
            if (index <5) {
             return (
             <div className="col" key={index}>
               <ForecastDaily data={dailyForecast}/>
            </div>
            );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    Load();
    return null;
   }
  }
  