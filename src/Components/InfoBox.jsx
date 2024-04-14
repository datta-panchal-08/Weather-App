import React from 'react'
import "./InfoBox.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
const InfoBox = ({info}) => {
   let INIT_IMG = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   const HOT_URL = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   const RAIN_URL = "https://images.unsplash.com/photo-1567699631772-21be4f5ef2ce?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   const COLD_URL = "https://images.unsplash.com/photo-1613416721439-9c2d988ab9cc?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className='infoBox'>
           <div className='cardContainer'>
           <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <p>{info.city} {info.humidity > 80 ? <ThunderstormIcon style={{color : "grey", fontSize :"1.4vw" } }/> : info.temp > 15 ? <WbSunnyIcon style={{color :"yellow", fontSize :"1.4vw"}}/> : <AcUnitIcon style={{color : "skyblue", fontSize :"1.4vw"}}/>}</p>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p>Temprature : {info.temp}&deg;c</p>
          <p>MinimumTemp : {info.tempMin}&deg;c</p>
          <p>MaximumTemp : {info.tempMax}&deg;c</p>
          <p>Humidity : {info.humidity}&deg;c</p>
          <p>The Weather Can Be Described As {info.weather} And Feels Like {info.feelsLike}&deg;c</p>
        </Typography>
      </CardContent>
    </Card>
           </div>
      </div>
  )
}

export default InfoBox