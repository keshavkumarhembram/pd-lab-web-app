import React,{useEffect, useState} from 'react'
import CityInput from './CityInput';

import Clear from './../assets/icons/Clear.svg';
import Clouds from './../assets/icons/Clouds.svg';
import Rain from './../assets/icons/Rain.svg';
import Snow from './../assets/icons/Snow.svg';
import Drizzle from './../assets/icons/Drizzle.svg';
import Sunny from './../assets/icons/Sunny.svg';
import Thunderstorm from './../assets/icons/Thunderstorm.svg';
import Default from './../assets/icons/Weather.svg';

const LeftContainer = ({weatherData,screenWidth
,fetchWeatherData}) => {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(()=>{
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
          }, 1000);
      
          return () => {
            clearInterval(intervalId); 
          }
    })

    function formatDateTime(dateTimeString) {
        const date = new Date(dateTimeString);
    
        const day = date.getDate();
        const month = date.toLocaleString('en-US', { month: 'long' });
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
    
        return `${day} ${month}, ${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${ampm}`;
      }
    const weatherConditionToSvg = {
        Clear,
        Clouds,
        Rain,
        Snow,
        Drizzle,
        Sunny,
        Thunderstorm,
    
        Default, // Default SVG for common weather conditions
      };

  return (
    <div className='leftContainer'>
         
    <div className='today-content'>
      {screenWidth < 550 && <CityInput fetchWeatherData={fetchWeatherData} />}
      <h5 className='showDate'>{formatDateTime(currentTime)}</h5>
      <h3 className='cityName'>{weatherData.name}, {weatherData.sys.country}</h3>
      <h1 className='degreeValue'>{Math.round(weatherData.main.temp)}<span>°</span></h1>
      <div className='weatherType'>
        <h3 className='cityName whatWeather'>
          <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="Weather Icon" />
          {weatherData.weather[0].main}
        </h3>
        <p>{weatherData.weather[0].description}</p>
      </div>
    </div>
 

  <div className='weather-Img'>
    <img
      className='illus'
      src={weatherConditionToSvg[weatherData.weather[0].main] || weatherConditionToSvg.Default}
      alt="Weather Illustration"
    />
  </div>
</div>
  )
}

export default LeftContainer