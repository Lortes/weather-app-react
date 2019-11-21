import React from "react";
import PropTypes from "prop-types";
import WeatherLocation from "./WeatherLocation"
import "./styles.css"

const LocationList = ({ cities, onSelectedLocation }) => {
    const handleWeatherLocationClick = (city) => { //WeatherLocation nos emite un evento q Lo disparamos hacia arriba y que lo coja app.js
        onSelectedLocation(city)
    }

    const strToComponents = cities => (
        cities.map(city =>
            (
                <WeatherLocation
                    key={city}
                    city={city}
                    // COGE EVENTO DISPARADO DESDE wheatherLocation y genera otro para pasarselo a app.js
                    //arrow fn que genera a su vez otro nuevo evento
                    onWeatherLocationClick={() => handleWeatherLocationClick(city)} />
            ))
    )


    console.log("Nos llegan las cities de App.js: ", cities)
    return (
        <div className="location-list">
            {strToComponents(cities)}
        </div>
    )
}

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func.isRequired,
}

export default LocationList;