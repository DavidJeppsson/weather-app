import LocationContainer from "../components/LocationContainer";
import WeatherContainer from "../components/WeatherContainer";

const InfoContainer = ({ data, temp, wind, humidity }) => {
  return (
    <div>
      <div className="info-container">
        <LocationContainer city={data.city} />
        <WeatherContainer
          weather={data.list[0]}
          temp={temp}
          wind={wind}
          humidity={humidity}
        />
      </div>
      <div className="info-container">
        <LocationContainer city={data.city} />
        <WeatherContainer
          weather={data.list[8]}
          temp={temp}
          wind={wind}
          humidity={humidity}
        />
      </div>
      <div className="info-container">
        <LocationContainer city={data.city} />
        <WeatherContainer
          weather={data.list[16]}
          temp={temp}
          wind={wind}
          humidity={humidity}
        />
      </div>
    </div>
  );
};

export default InfoContainer;
