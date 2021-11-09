const LocationContainer = ({ city }) => {
  return (
    <div className="location-container">
      <div className="location">
        {console.log(city)}
        {city.name}, {city.country}
      </div>
    </div>
  );
};

export default LocationContainer;
