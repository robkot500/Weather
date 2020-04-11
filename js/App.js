import React, {useState} from 'react'
import ReactDOM from "react-dom";
import './../scss/main.scss';
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";

const isDesktop = window.matchMedia("screen and (min-width: 400px)");
console.log(isDesktop)
isDesktop.addListener(function(event) {
    if (event.matches) {
        console.log('match')
    } else {
        console.log('else')
    }
});
const App = () =>{
    const [data, setData] = useState(null);
    console.log(data)
    return(
        <>
            <div className='container'>
                <Header setData={setData}/>
                <Main data={data}/>
                <Footer data={data}/>
            </div>
        </>
    )
}



ReactDOM.render(<App/>, document.getElementById("app"));