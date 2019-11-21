import React from "react";
import PropTypes from "prop-types"
import WeatherData from "../WeatherLocation/WeatherData"


const ForecastItem = ({ weekDay, hour, data}) => {
    return (
        <div> Día: {weekDay} Hora: {hour}
            <WeatherData data= { data } > </WeatherData>
        </div>
    )
}



ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({ //esperamos un obj con una determinada forma
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
}

export default ForecastItem;