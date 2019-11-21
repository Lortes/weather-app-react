import React, { Component } from 'react';
import { Grid, Row, Col } from "react-flexbox-grid";
import './App.css';
import Paper from "@material-ui/core/Paper"
import AppBar from "@material-ui/core/AppBar"
import Typography from "@material-ui/core/Typography"
import Toolbar from "@material-ui/core/Toolbar"
import ForecastExtended from "./components/WeatherLocation/ForecastExtended"

import LocationList from "./components/LocationList"


const cities = [
    "Madrid,es",
    "Buenos Aires,ar",
    "Marrakesh,ma",
    "Paris,fr",
    "Budapest,hu",
    "Cairo,eg",
    "Lima,pe",
    "Prague,cz",
    "Amsterdam,nl",
    "Kiev,ua",
    "Saint Petersburg,ru",
    "Oslo,no"
]



class App extends Component {


    constructor() {
        super() // super() muy necesario sino no puedes usar state
        this.state = { //this.state = SOLO se puede hacer en el constr.
            city: null
        }
    }
    //manejador de evento
    handleSelectedLocation = city => {
        this.setState({ //ACTUALIZA EL ESTADO al hacer click
            // city: city //city key y la city que te viene por parametro. abrevia por es6
            city
        })
        console.log(`handleSelectedLocation: ${city}`) //maneja todo el proceso. el click a un weatherLocation y te muestra su name city
    }

    render() {
        const { city } = this.state
        return (

            <Grid>
                <Row>
                    <AppBar position="sticky">
                        <Toolbar>
                            <Typography variant="title" color="inherit">
                                Weather App
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <h3>Título</h3>
                </Row>

                <Row>
                    <Col xs={12} md={6}>
                        <LocationList cities={cities}
                            onSelectedLocation={this.handleSelectedLocation} />
                    </Col>

                    {/* Pronóstico detallado */}
                    <Col xs={12} md={6}>
                        <Paper elevation={4}>
                            <div className="details">
                                {/* city= this.state.city */}
                                {city === null ? "No se seleccionó ciudad" :
                                    <ForecastExtended city={ city }> </ForecastExtended>
                                }
                            </div>
                        </Paper>
                    </Col>
                </Row>
            </Grid>

        );

    }
}

export default App;
