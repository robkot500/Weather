import React from 'react';
import Clock from "./Clock";


const Card = ({data, type, index, dayOfWeek}) => {




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
    if (data !== null){

        if(!data.city) {
            return null;
        }

        description= data.list[index].weather[0].description;
        description = description.charAt(0).toUpperCase() + description.slice(1);
        icon = data.list[index].weather[0].icon;
        wind = Math.round(data.list[index].wind.speed);
        temp = Math.round(data.list[index].main.temp)
        pressure = data.list[index].main.pressure;
        humidity = data.list[index].main.humidity;
        feels = Math.round(data.list[index].main.feels_like);
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

    let day;

        const date = new Date();
        let da = date.getDay() + dayOfWeek;
        switch(da){
            case 0: day='Niedziela'; break;
            case 1: day='Poniedziałek'; break;
            case 2: day='Wtorek'; break;
            case 3: day='Sroda'; break;
            case 4: day='Czwartek'; break;
            case 5: day='Piątek'; break;
            case 6: day='Sobota'; break;
            case 7: day='Niedziela'; break;
            case 8: day='Poniedziałek'; break;
            case 9: day='Wtorek'; break;
            case 10: day='Sroda'; break;
            case 11: day='Czwartek'; break;
            case 12: day='Piątek'; break;
            case 13: day='Sobota'; break;
            default: day='Pogoda teraz';

        }


    if(type === 'small') {
        return (

            <div className="small">
                <div className="line-small">
                    <div className="line-cover-small">{day}</div>
                    <div className='small-description'>{description}</div>
                    <div className='small-icon'><img src={srcI} alt="weather" className='icon'/>
                        {temp}°C</div>
                </div>
            </div>


        );
    }

    if(type === 'big') {
        return (
            <div className="big">
                <div className="line-big">
                    <div className="line-cover-big">{day}</div>
                    <div className="big-wrapper1">
                        <div className='big-description'>{description}</div>
                        <div className='big-icon'><img src={srcI} alt="weather" className='icon'/>
                            {temp}°C</div>
                    </div>
                    <div className="big-wrapper2">
                        <div className="big-wrapper2-section">
                            <div>Ciśnienie<br/></div>
                            <div className="volume">{pressure} hPa</div>
                        </div>
                        <div className="big-wrapper2-section">
                            <div>Prędkość wiatru<br/></div>
                            <div className="volume">{wind} km/h</div>
                        </div>
                        <div className="big-wrapper2-section">
                            <div>Odczuwalna temp.</div>
                            <div className="volume">{feels} °C</div>
                        </div>
                        <div className="big-wrapper2-section">
                            <div>Wilgotność</div>
                            <div className='volume'>{humidity} %</div>
                        </div>
                    </div>


                </div>
            </div>
        );
    }





}

export default Card;