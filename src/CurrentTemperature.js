import React, {useState} from "react";
import "./CurrentTemperature.css"

export default function CurrentTemperature (props){
    const [unit, setUnit] = useState("celcius");

    function showFahrenheit (event) {
        event.preventDefault();
        setUnit("farhenheit");
    }

    function showCelcius(event) {
       event.preventDefault();
       setUnit("celcius"); 
    }

    function farhenheit(){
        return (props.celcius*9)/5+32; 
    }

    if (unit === "celcius"){
        return (
            <div>
            <strong className="temperature">{Math.round(props.celcius)}</strong>
            <span className="units"> ºC|<a href="/" style={{textDecoration: 'none'}} onClick={showFahrenheit}>ºF</a></span>
            </div>    
           ) 
    } else {
        return (
            <div>
            <strong className="temperature">{Math.round(farhenheit())}</strong>
            <span className="units"> <a href="/" style={{textDecoration: 'none'}} onClick={showCelcius}>ºC </a>|ºF</span>
            </div> 
        );
    }
}

