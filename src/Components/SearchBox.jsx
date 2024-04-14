import React, { useState } from 'react'
import './SearchBox.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { red, yellow } from '@mui/material/colors';



const SearchBox = ({updateInfo}) => {
    let [city,setCity] = useState("");
    let [error ,setError] = useState(false);
    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "bb0162252e625cf68b45f216b87442e3";

    let getWeatherInfo = async () =>{
        try{
          const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
          const jsonResponse = await response.json();
          let result = {
            city : city,
            temp : jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,   
            humidity : jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description,
          }
          console.log(result);
          return result;
        }catch(err){
          throw err;
        }
    }    

    let handleChange = (event) =>{
        setCity(event.target.value);
        console.log(city);
    }
   
    let handleSubmit = async (event) =>{
       try{
        event.preventDefault();
        setCity("");
       let newInfo  = await getWeatherInfo();
       updateInfo(newInfo);
       }catch(err){
        setError(true)

       }

    }

  return (
    <div className='searchBox'>
        <h3>Search For The Weather</h3>
        <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" required onChange={handleChange} value={city}/>
        <Button variant="contained" type="submit">
        Search
      </Button>
      {error && <p style={{color : "red"}}>No Such Place Exists!</p>}

        </form>
    </div>
  )
}

export default SearchBox