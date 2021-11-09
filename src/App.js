import { useState, useEffect } from "react";
import "./App.css";
import InfoContainer from "./components/InfoContainer";
import ButtonContainer from "./components/ButtonContainer";

const api = {
  key: "0dc8cdb5b43413197d803e51a5d8f5b8",
  base: "https://api.openweathermap.org/data/2.5/",
};

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [showWind, setShowWind] = useState(false);
  const [temp, setTemp] = useState(true);
  const [wind, setWind] = useState(true);
  const [humidity, setHumidity] = useState(true);

  // Fetch weather data
  const search = (evt) => {
    if (evt.key == "Enter") {
      fetch(`${api.base}forecast?q=${query}&units=metric&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };
  // Toggle to show/hide temperature
  const toggleTemp = () => {
    setTemp(temp ? false : true);
  };
  // Toggle to show/hide wind
  const toggleWind = () => {
    setWind(wind ? false : true);
  };
  // Toggle to show/hide humidity
  const toggleHumidity = () => {
    setHumidity(humidity ? false : true);
  };

  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Enter location..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.city != "undefined" ? (
          <>
            <InfoContainer
              data={weather}
              temp={temp}
              wind={wind}
              humidity={humidity}
            />
            <ButtonContainer
              toggleTemp={toggleTemp}
              toggleWind={toggleWind}
              toggleHumidity={toggleHumidity}
              temp={temp}
              wind={wind}
              humidity={humidity}
            />
          </>
        ) : (
          ""
        )}
      </main>
    </div>
  );
};

export default App;
