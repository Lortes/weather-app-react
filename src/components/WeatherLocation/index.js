import React from "react";
import {CircularProgress} from "@material-ui/core"
import {PropTypes} from "prop-types";
import { Component } from "react";
import Location from "./Location"
import WeatherData from "./WeatherData";
import "./styles.css"

import transformWeather from "./../../utils/transformWeather"
import getUrlWeatherByCity from "../../utils/getUrlWeatherByCity"

// import { apiWeather } from "../../constants/apiConfig"


// COMPONENTE de clase (MANEJOS DE ESTADO)
class WeatherLocation extends Component {

    constructor(props) { //Punto donde se empieza a crear el componente
        super(props); //constructor siempre necesario

        const { city } = props;
        this.state = { // SOLO this.state igualandolo en el CONTRUCTOR
            city,
            data: null // Cuando se contruye no hay info
        }
       // console.log("1. CONSTRUCTOR")

    }

    componentDidMount() {
        //console.log("3. CREACCIÓN DEL COMPONENTE: componentDidMount -El componente ya está disponible en el DOM !!! (petis)")
        this.handleUpdateClick(); //Actualiza datos al montar el componente
    }

    componentDidUpdate(prevProps, prevState) {
        //console.log("ACTUALIZACIÓN DEL COMPONENTE: componentDidUpdate - Despues de arenderizarse actualizado")
    }


    handleUpdateClick = () => {
        /* ---------- PETICIÓN A LA API ----------------- */
        //   debugger;
        const apiWeather = getUrlWeatherByCity(this.state.city);
        fetch(apiWeather).then(resolve => {
          //  console.log("RESOLVE: ", resolve); //respuesta servidor, solo la cabecera, hay que pasarlo a json
            return resolve.json(); //lo convertimos para obtener lo q necesitamos (esto devuelve otra promise)
        }).then(data => {
           // console.log("RESULT: handleUpdateClick")
            const newWeather = transformWeather(data); // transformamos la data recibida ajustandola a la nuestra
            //console.log("NEW DATA WEATHER", newWeather);
            this.setState({ //Actualiza nuestro componente con los datos obtenidos
                data: newWeather
            })
            //console.log("DATA", data) //DATA contiene toda la info del clima
        })
    }

    render() {
       // console.log("2. RENDER")
        const {onWeatherLocationClick} = this.props // onWeatherLocationClick LO ESPERAMOS POR PROPS desde LocationList
        const { city, data } = this.state //lo cogemos del estado
        return (
            <div className="weather-location" onClick={onWeatherLocationClick}>
                <Location city={city} />
                {/* Si no hay data no vamos a renderizar el componente / ternario*/}
                {data ? <WeatherData data={data} /> : <CircularProgress size={90}/>}
                {/* <button onClick={this.handleUpdateClick} className="btn-actualizar"> Actualizar </button> Ya actualiza solo no hace falta hacer click */}
            </div>
        )
    }

}

WeatherLocation.propsTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func.isRequired,
}

export default WeatherLocation;
