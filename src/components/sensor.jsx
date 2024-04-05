
import humidity from "../assets/icons/humidity.png";
import pressure from "../assets/icons/Pressure.png";
import temperature from "../assets/icons/Temperature.png";


const sensor = ({sensorData}) => {
  

  const weatherDetails = [
    {
      label: "Humidity",
      value: sensorData.humidity,
      unit: "%",
      icon: "humidity_percentage",
      imagePath: humidity,
    },
    {
      label: "Feels like",
      value: Math.round(sensorData.temperature), // Round temperature
      unit: "°C",
      icon: "device_thermostat",
      imagePath: temperature,
    },
    {
      label: "Pressure",
      value: sensorData.pressure,
      unit: "Pa", // Pressure in pascals
      icon: "compress",
      imagePath: pressure,
    },
  ];

  return (
    <>
    {sensorData !== null && <div className="sensor">
      <p>Weather Sensor Data</p>
      <div className="sensordata">
        {weatherDetails.map((detail, index) => (
          <div className="detailContainer" key={index}>
            <div className="align">
              <p>{detail.label}</p>

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
    </div>}
    </>
  );
};
export default sensor;
