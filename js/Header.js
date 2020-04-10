import React,{useState,useEffect} from 'react';



const Header = ({setData}) => {
    const [name,setName]= useState('Wroclaw')
    const [changePlace, setChangePlace] = useState(false);
    const key = 'ea814effdba0637eb431a0e15e2de736'
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${name}&units=metric&cnt=60&lang=pl&appid=${key}`)
            .then(response => {
                return response.json();
            })
            .then(info => {
                setData(info);
            });
    }, [changePlace]);


    return(
        <>
        <div className='header-wrapper'>
            NNNNNN
        </div>
            <div className='header-wrapper'>
                NNNNNN
            </div>
            </>

    )
}
export default Header
