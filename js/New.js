import React,{useState,useEffect} from 'react';
import {Link} from 'react-scroll';

const New = ()=> {
    var x = window.matchMedia("(max-width: 600px)")
    const[width,setWidth]= useState(x.matches)
    useEffect(() => {
        const isDesktop = window.matchMedia("screen and (min-width: 600px)");
        isDesktop.addListener(function(event) {
            if (event.matches) {
                console.log(event.matches, 'ggggg')
                setWidth( prevState => false)
                console.log(width, 'width min')
            }
        }, []);
    });
    useEffect(() => {
        const isMobile = window.matchMedia("screen and (max-width: 599px)");
        isMobile.addListener(function(event) {
            if (event.matches) {
                console.log(event.matches, 'ssssss')
                setWidth( prevState => true)
                console.log(width, ' width max')
            }
        }, []);
    });
    if(width===false){
        // console.log("DESKTOP")
        // console.log(width)
        return (
                <>
            <h1>DESKTOP</h1>
</>

        )
    }
    if(width===true){
        // console.log("MOBILE")
        // console.log(width)
        return (
            <h1>MOBILE</h1>
        )
    }
}
export default New