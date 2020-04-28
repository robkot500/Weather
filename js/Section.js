import React from 'react';
import Clock from "./Clock";

const Section = ({data})=>{
    let sunrise;
    let sunset;
    let name;


    if(data == null){
    }else{
        if(!data.city) {
            return null;
        }
        const sunr = data.city.sunrise
        const suns = data.city.sunset
        let dateObjA = new Date(sunr * 1000);
        let dateObjB = new Date(suns*1000)
        let hours = dateObjA.getUTCHours()+2;
        let minutes = dateObjA.getUTCMinutes();
        let hoursB = dateObjB.getUTCHours()
        let minutesB = dateObjB.getUTCMinutes()

        const sunR = ()=>{
            if (hours<10){
                hours = '0' + hours;
            }
            if(minutes<10){
                minutes= '0'+ minutes
            }
            sunrise =`${hours} : ${minutes}`
            return sunrise;
        }
        sunR()
        const sunS = ()=>{
            if (hoursB<10){
                hoursB = '0' + hoursB;
            }
            if(minutesB<10){
                minutesB= '0'+minutesB
            }
            sunset =`${hoursB} : ${minutesB}`
            return sunset;
        }
        sunS()

        name = data.city.name

    }

    return(
        <>
            <div className="row">
                <div className="col-8">
                    <div className="box box-2">
                        <div className="name">{name}</div>
                        <div className='time'><Clock/></div>
                    </div>
                </div>
            </div>
            </>
    )
}
export default Section