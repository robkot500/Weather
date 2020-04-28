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
    const getLocation = ()=> {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    const showPosition = (position) =>{

        const lat = position.coords.latitude
        const lon = position.coords.longitude

        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&cnt=60&lang=pl&appid=ea814effdba0637eb431a0e15e2de736`)
            .then(response => {
                return response.json();
            })
            .then(info => {
                setData(() => info);
            });
    }

    return(
        <>
            <div className="row">
                <div className="col-8">
                    <div className="box box-1">
                        <div className='search'>
                            <form onSubmit={e => {
                                e.preventDefault();
                                setChangePlace(() => e.timeStamp)
                            }
                            }>
                                <input type="text"
                                       autoComplete="off"
                                       name='name'
                                       className='input'
                                       placeholder='Podaj nazwę miasta'
                                       onChange={e => setName(e.target.value)}/>
                            </form>
                            <i className="fas fa-search" onClick={e => setChangePlace(() => e.timeStamp)}></i>
                            <i className="fas fa-map-marked-alt" onClick={() => getLocation()}></i>
                        </div>
                    </div>
                </div>
            </div>

            </>

    )
}
export default Header
