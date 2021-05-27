import React from "react";

export default function ForecastDaily(props) {
    function maxTemperature(){
        let temperature = Math.round(props.data.temp.max)
        return `${temperature}º`;
    }
    function minTemperature(){
        let temperature = Math.round(props.data.temp.min)
        return `${temperature}º`;
    }

    function day() {
        let date = new Date(props.data.dt*1000);
        let day=date.getDay();
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        return days[day];
    
    }

    return (

        <div>
        <h3 className="forecast-date">{day()}</h3>
            <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
            <div className="weather-forecast-temperature">
              <span className="forecast-temperature-min">{minTemperature()}</span>|
              <span className="forecast-temperature-max">{maxTemperature()}</span>
            </div>
        </div>
    );
}