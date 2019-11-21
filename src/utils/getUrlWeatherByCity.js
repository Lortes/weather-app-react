import {urlBaseWeather, apiKey} from "../constants/apiConfig"


const getUrlWeatherByCity = city => {
    return `${urlBaseWeather}?q=${city}&APPID=${apiKey}`

}

export default getUrlWeatherByCity;