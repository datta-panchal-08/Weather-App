import React, { useState } from 'react'
import SearchBox from "./SearchBox.jsx"
import InfoBox from "./InfoBox.jsx"
const WeatherApp = () => {
    const [weatherInfo,setweatherInfo] = useState({
        city : "Delhi",
        temp :25.05,
        tempMin : 25.05,
        tempMax : 25.05,   
        humidity : 47,
        feelsLike :  24.84,
        weather : "haze",
    });

    let updateInfo = (result) =>{
        setweatherInfo(result);
    }
  return (
    <div>
        <SearchBox updateInfo = {updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>
  )
}

export default WeatherApp