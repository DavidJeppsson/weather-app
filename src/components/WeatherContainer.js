const WeatherContainer = ({ weather, temp, wind, humidity }) => {
  console.log("weather", weather);
  return (
    <div className="weather-container">
      <div className="date">{weather.dt_txt.split(" ")[0]}</div>
      {temp ? (
        <div className="temp">{Math.round(weather.main.temp)}°c</div>
      ) : (
        ""
      )}

      <div className="weather">{weather.weather[0].main}</div>
      {wind ? <div className="wind">Wind {weather.wind.speed}m/s</div> : ""}

      {humidity ? (
        <div className="humidity">Humidity {weather.main.humidity}%</div>
      ) : (
        ""
      )}
    </div>
  );
};

export default WeatherContainer;
