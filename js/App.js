import React, {useState} from 'react'
import ReactDOM from "react-dom";
import './../scss/main.scss';
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";
import New from "./New";


const App = () =>{
    const [data, setData] = useState(null);

    return(
        <>
            <div className='container'>
                <Header setData={setData}/>
                <Section data={data}/>
                <Main data={data}/>
                <Footer data={data}/>
            </div>
        </>
    )
}



ReactDOM.render(<App/>, document.getElementById("app"));