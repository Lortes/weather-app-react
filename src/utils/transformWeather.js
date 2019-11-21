import convert from "convert-units"
import { CLOUD , SUN, RAIN, SNOW, THUNDER, DRIZZLE } from "../constants/weathers"

//convertir grados
const getTemp = kelvin => {
    return Number(convert(kelvin).from("K").to("C").toFixed(0));
}

const getWeatherState = apiWeatherData => {
   const {id} = apiWeatherData; //nos llega un identificador del clima (id)

   if (id < 300) {
       return THUNDER;
   } else if (id < 400) {
        return DRIZZLE;
   }else if (id < 600){
        return RAIN;
   }else if (id < 700){
       return SNOW;
   }else if (id === 800){
        return SUN;
   }else {
       return CLOUD;
   }
}

//CONVERSIÓN: informacion de la api > TransformWeather(getWeatherState) >identificador propio de la app
const transformWeather = apiWeatherData => {
    //Obtenemos los datos que nos devuelve la api adecuandolos a nuestro objeto

    const { humidity, temp } = apiWeatherData.main;
    const { speed } = apiWeatherData.wind
    const weatherState = getWeatherState(apiWeatherData.weather[0]);
    const temperature = getTemp(temp);
    //Construimos nuestro nuevo objeto data adecuandonos a lo que recibimos del servidor api
    const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`
    }
    return data
}

export default transformWeather

