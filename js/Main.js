import React from 'react';
import Header from "./Header";

const Main = ({data}) => {
    console.log(data,'asdf')
    if(data === null) {
        return null;
    }
    let feels;
    let pressure;
    let temp;
    let wind;
    let icon;
    let humidity;
    let description;
    let index = 0
    if (data !== null){

        if(!data.city) {
            return null;
        }

        description= data.list[index].weather[0].description;
        description = description.charAt(0).toUpperCase() + description.slice(1);
        icon = data.list[index].weather[0].icon;
        wind = data.list[index].wind.speed;
        temp = data.list[index].main.temp;
        pressure = data.list[index].main.pressure;
        humidity = data.list[index].main.humidity;
        feels = data.list[index].main.feels_like;
    }

    let srcI;
    switch (icon) {
        case '01d':
            srcI = 'http://openweathermap.org/img/wn/01d@2x.png';
            break;
        case '02d':
            srcI = 'http://openweathermap.org/img/wn/02d@2x.png';
            break;
        case '03d':
            srcI = 'http://openweathermap.org/img/wn/03d@2x.png';
            break;
        case '04d':
            srcI = 'http://openweathermap.org/img/wn/04d@2x.png';
            break;
        case '09d':
            srcI = 'http://openweathermap.org/img/wn/09d@2x.png';
            break;
        case '10d':
            srcI = 'http://openweathermap.org/img/wn/10d@2x.png';
            break;
        case '11d':
            srcI = 'http://openweathermap.org/img/wn/11d@2x.png';
            break;
        case '13d':
            srcI = 'http://openweathermap.org/img/wn/13d@2x.png';
            break;
        case '50d':
            srcI = 'http://openweathermap.org/img/wn/50d@2x.png';
            break;
        case '01n':
            srcI = 'http://openweathermap.org/img/wn/01n@2x.png';
            break;
        case '02n':
            srcI = 'http://openweathermap.org/img/wn/02n@2x.png';

        case '03n':
            srcI = 'http://openweathermap.org/img/wn/03n@2x.png';
            break;
        case '04n':
            srcI = 'http://openweathermap.org/img/wn/04n@2x.png';
            break;
        case '09n':
            srcI = 'http://openweathermap.org/img/wn/09n@2x.png';
            break;
        case '10n':
            srcI = 'http://openweathermap.org/img/wn/10n@2x.png';
            break;
        case '11n':
            srcI = 'http://openweathermap.org/img/wn/11n@2x.png';
            break;
        case '13n':
            srcI = 'http://openweathermap.org/img/wn/13n@2x.png';
            break;
        case '50n':
            srcI = 'http://openweathermap.org/img/wn/50n@2x.png';
            break;
        default:
            srcI = 'http://openweathermap.org/img/wn/02d@2x.png';

    }


    return(
<>


    </>
    )
}
export default Main