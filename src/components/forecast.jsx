import React from "react";

const Forecast = (props) => {
  const { temp, month, day, hour, icon } = props;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;
  return (
    <div className="ForecastWrapper">
      <span className="Text" style={{ textAlign: "center" }}>
        {month}.{day}
      </span>
      <span className="Text" style={{ textAlign: "center" }}>
        {hour}:00
      </span>
      <img src={iconUrl} alt="" className="WeatherIcon" />
      <h3 className="SmallLabel" style={{ textAlign: "center", weight: "400" }}>
        {temp}&#176;
      </h3>
    </div>
  );
};

export default Forecast;
