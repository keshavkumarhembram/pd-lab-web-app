import React,{useRef} from 'react'
import humidity from "../assets/icons/humidity.png"
import wind from "../assets/icons/wind-energy.png"
import pressure from "../assets/icons/Pressure.png"
import temperature from "../assets/icons/Temperature.png";
import visibility from "../assets/icons/Visibility.png";
import sunrise from "../assets/icons/Sunrise.png";
import sunset from "../assets/icons/Sunset.png";
import leftArrow from "../assets/icons/left-arrow.png";
import rightArrow from "../assets/icons/right-arrow.png";
const TodayWeather = ({weatherData}) => {
    const allWeatherDetailsRef = useRef(null);

    function formatTime(timestamp, includeAMPM = false) {
        const date = new Date(timestamp * 1000); // Convert timestamp to milliseconds
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;
    
        if (includeAMPM) {
          return `${ampm}`;
        } else {
          return `${formattedHours}:${minutes.toString().padStart(2, '0')}`;
        }
      }

    const weatherDetails = [
      {
        label: "Humidity",
        value: weatherData?.main?.humidity,
        unit: "%",
        icon: "humidity_percentage",
        imagePath: humidity,
      },
      {
        label: "Wind",
        value: weatherData?.wind?.speed,
        unit: "m/s",
        icon: "wind_power",
        imagePath: wind,
      },
      {
        label: "Visibility",
        value: Math.round(weatherData?.visibility / 1000),
        unit: "km",
        icon: "visibility",
        imagePath: visibility,
      },
      {
        label: "Feels like",
        value: Math.round(weatherData?.main?.feels_like), // Round temperature
        unit: "°C",
        icon: "device_thermostat",
        imagePath: temperature,
      },
      {
        label: "Sunrise",
        value: formatTime(weatherData?.sys?.sunrise),
        unit: formatTime(weatherData?.sys?.sunrise, true), // Pass a second argument to indicate AM/PM format
        icon: "clear_day",
        imagePath: sunrise
      },
      {
        label: "Sunset",
        value: formatTime(weatherData?.sys?.sunset),
        unit: formatTime(weatherData?.sys?.sunset, true), // Pass a second argument to indicate AM/PM format
        icon: "routine",
        imagePath: sunset
      },
      {
        label: "Pressure",
        value: weatherData?.main?.pressure,
        unit: "Pa", // Pressure in pascals
        icon: "compress",
        imagePath: pressure,
      },
    ];

      const scrollWeatherDetails = (scrollValue) => {
        if (allWeatherDetailsRef.current) {
          allWeatherDetailsRef.current.scrollTo({
            left: allWeatherDetailsRef.current.scrollLeft + scrollValue,
            behavior: 'smooth', 
          });
        }
      };

    return (
      <div className="weatherDetails">
        <div className="detailsHandler">
          <p>More details of today's weather</p>
          <div className="slidebtns">
            <div onClick={() => scrollWeatherDetails(-500)}>
              {/* <span className="material-symbols-rounded weatherIcon">
                {" "}
                chevron_left
              </span> */}
              <div style={{ backgroundColor: "#5C9CE5" }} className="icondiv">
                <img src={leftArrow} className="funicon" />
              </div>
            </div>
            <div onClick={() => scrollWeatherDetails(500)}>
              {/* <span className="material-symbols-rounded weatherIcon">
                {" "}
                chevron_right
              </span> */}

              <div style={{ backgroundColor: "#5C9CE5" }} className="icondiv">
                <img src={rightArrow} className="funicon" />
              </div>
            </div>
          </div>
        </div>
        <div className="allWeatherDetails" ref={allWeatherDetailsRef}>
          {weatherDetails.map((detail, index) => (
            <div className="detailContainer" key={index}>
              <div className="align">
                <p>{detail.label}</p>
                {/* <span className="material-symbols-rounded weatherIcon">
                  {detail.icon}
                </span> */}
                <div style={{ backgroundColor: "#5C9CE5" }} className="icondiv">
                  <img
                    src={detail.imagePath}
                    // style={{ height: "1.5em" }}
                    className="funicon"
                  />
                </div>
              </div>
              <div className="valueContainer">
                <p className="value">
                  {detail.value}
                  <span>{detail.unit}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default TodayWeather