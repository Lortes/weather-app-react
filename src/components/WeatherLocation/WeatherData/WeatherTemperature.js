import React from "react";
import WeatherIcons from "react-weathericons";
import PropTypes from "prop-types"; //validar propiedades que les pasamos por parametros a los componentes
import { CLOUD, SUN, RAIN, SNOW, THUNDER, DRIZZLE} from "../../../constants/weathers"

// remplaza el valor de la key por el que tiene la constante (doble filtro) pasamos todas las constantes como nombre de las propiedades
//CONVERSIÓN: Identificador propio de la app > icons[] > identificador del icono weatherIcon
const icons = {
    [CLOUD]: "cloud",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [THUNDER]:"day-thunderstorm",
    [DRIZZLE]: "day-showers"
}

// retorno de componente mediante funcion
//desacoplanos el nombre que nos viene, del que necesita la libreria
const getWeatherIcon = weatherState => {
    const icon = icons[weatherState]
    //console.log("weatherState", weatherState)
    //console.log("icon", weatherState)

    if(icon) //sino existe icon, tiene default
        return <WeatherIcons name={icon} size="2x" />;
    else
        return <WeatherIcons name={"day-sunny"} size="4x" />;
}


const WeatherTemperature = ({ temperature, weatherState }) => {
//console.log("2. WEATHER STATE EN WEATHER TEMPERATURE ---", weatherState)
    return (
        <div className="cont-weather-temperature">
            { getWeatherIcon(weatherState) } {/* Retornamos el componente */}

            <span className="temperature"> {`${temperature}`} </span>
            <span className="temperature-type"> {`Cº`} </span>


        </div>
    )
}

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired //si o sí hay que ponerlo bien
    //isRequired para evitar null o que no lo pongan
};

export default WeatherTemperature;