import React from "react";
import WeatherTemperature from "./WeatherTemperature"
import WeatherExtraInfo from "./WeatherExtraInfo";
import PropTypes from "prop-types"
import "./styles.css";

//import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY } from "../../../constants/weathers"

//recibimos el obj que le pasamos desde weatherLocation
const WeatherData = ({data}) => {
    const {temperature, weatherState, humidity, wind} = data
    //console.log("WEATHER STATE EN WEATHERDATA ---- >",weatherState)

    return (

        <div className="cont-weather-data">
            <WeatherTemperature temperature={temperature} weatherState={weatherState} />
            <WeatherExtraInfo humidity={humidity} wind={wind} />
        </div>
    )
}

WeatherData.propTypes = {
    data: PropTypes.shape({ //esperamos un obj con una determinada forma
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })


}

export default WeatherData;