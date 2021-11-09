import Button from "./Button";

const ButtonContainer = ({
  toggleTemp,
  toggleWind,
  toggleHumidity,
  temp,
  wind,
  humidity,
}) => {
  const onClick = () => {
    console.log("Click");
  };

  return (
    <div className="btn-container">
      <Button
        text={temp ? "Hide Temperature" : "Show temperature"}
        onClick={toggleTemp}
      />
      <Button text={wind ? "Hide Wind" : "Show wind"} onClick={toggleWind} />
      <Button
        text={humidity ? "Hide Humidity" : "Show Humidity"}
        onClick={toggleHumidity}
      />
    </div>
  );
};

export default ButtonContainer;
