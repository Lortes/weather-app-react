import React from "react";
import PropTypes from "prop-types"


// humedad y vientos
const WeatherExtraInfo = ({ humidity, wind }) => {
    return (
        <div className="cont-weather-extrainfo">
            {/* <span> {humidity + "%"} </span> */}
            <p> {`Humedad: ${humidity}%`}</p>
            <p> {`Viento: ${wind}`} </p>


        </div>
    )
}

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
}

export default WeatherExtraInfo;