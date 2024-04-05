import React from 'react'
import CityInput from './CityInput';
import Graph from './hourlyGraph';
import TodayWeather from "./TodayWeather"
import Sensor from './sensor';

const RightContainer = ({weatherData,screenWidth,cityName,fetchWeatherData,sensorData}) => {
  return (
    <div className='rightContainer'>
    <div className='topBar'>
      {screenWidth > 550 && <CityInput fetchWeatherData={fetchWeatherData} />}
    </div>
    <div className="hourlyWeather">
      <Graph city={cityName} screenWidth={screenWidth} />
    </div>
    <TodayWeather weatherData={weatherData} />
    <Sensor sensorData={sensorData}/>
  </div>
  )
}

export default RightContainer