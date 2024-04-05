import { useEffect, useState } from "react";
import CityInput from './CityInput';
import Graph from './hourlyGraph';
import TodayWeather from "./TodayWeather"
import Sensor from './sensor';

const RightContainer = ({weatherData,screenWidth,cityName,fetchWeatherData}) => {

  const [sensorData, setSensorData] = useState(null);
  const getSensorData = async () => {
    const sensorResponse = await fetch(
      `https://weather-api-eadu.onrender.com/weather`
    );
    const sensorData = await sensorResponse.json();

    setSensorData(sensorData);
  };

useEffect(() => {
  getSensorData();
}, []);

  return (
    <div className='rightContainer'>
    <div className='topBar'>
      {screenWidth > 550 && <CityInput fetchWeatherData={fetchWeatherData} />}
    </div>
    <div className="hourlyWeather">
      <Graph city={cityName} screenWidth={screenWidth} />
    </div>
    <TodayWeather weatherData={weatherData} />
    {sensorData && <Sensor sensorData={sensorData}/>}
  </div>
  )
}

export default RightContainer