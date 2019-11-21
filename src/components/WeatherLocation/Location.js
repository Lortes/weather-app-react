import React from "react";
import PropTypes from "prop-types"

const Location = ( { city } ) => { //puedes desestructurar directamente en parametros
    //const city = props.city;
   // const { city } = props; //puedes desestructurarlo aqui pasando de parametro (props)

    // console.log(props);
    // debugger;

    return (
        <div className="location">
            <h2> {city} </h2>
        </div>

    )
}


Location.propTypes = {
    city: PropTypes.string.isRequired,  //ptsr: property type string required
}

export default Location;