import React, { Component } from "react"
import PropTypes from "prop-types"
import "./styles.css"
import ForecastItem from "../ForecastItem"

const days = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo"
]

const data = {
    temperature: 20,
    humidity:5,
    weatherState:"normal",
    wind:"normal"
}
class ForecastExtended extends Component {

renderForecastItemDays() {
    //renderizamos nuestro array de días
    return days.map(day => (<ForecastItem weekDay={day} hour={"10h"} data={data}> </ForecastItem>))
}

    render() {

        const { city } = this.props
        return (
            <div>
               <h2 className="pronostico"> Pronóstico Extendido para { city } </h2>

               {/* si no ponemos this la funcion no estría definida */}
               { this.renderForecastItemDays() }
            </div>
        )
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;