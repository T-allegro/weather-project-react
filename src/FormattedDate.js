import React from "react";

export default function FormattedDate (props){
    let date = props.date.getDate();
    let hours=props.date.getHours();
        if (hours < 10) {
            hours=`0${hours}`;
        }
    let minutes=props.date.getMinutes();
        if (minutes < 10) {
            minutes=`0${minutes}`;
        }
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day= days[props.date.getDay()];
    
    let months = ["Jan", "Fev", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let month = months[props.date.getMonth()];
    
    return(
        <div>
            {day}, {date} {month} {hours}:{minutes}
        </div>
    );
}