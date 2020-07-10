import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";
import Forecast from "./forecast";

const Result = ({ weather }) => {
  const {
    city,
    country,
    date,
    description,
    main,
    temp,
    sunset,
    sunrise,
    humidity,
    wind,
    highestTemp,
    lowestTemp,
    forecast,
  } = weather;

  const forecasts = forecast.map((item) => (
    <Forecast
      key={item.dt}
      temp={Math.floor(item.main.temp * 1) / 1}
      icon={item.weather[0].icon}
      month={item.dt_txt.slice(5, 7)}
      day={item.dt_txt.slice(8, 10)}
      hour={item.dt_txt.slice(11, 13) * 1}
    />
  ));
  let weatherIcon = null;
  if (main === "Thunderstorm") {
    weatherIcon = <FontAwesomeIcon icon={faBolt} />;
  } else if (main === "Drizzle") {
    weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
  } else if (main === "Rain") {
    weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
  } else if (main === "Snow") {
    weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
  } else if (main === "Clear") {
    weatherIcon = <FontAwesomeIcon icon={faSun} />;
  } else if (main === "Clouds") {
    weatherIcon = <FontAwesomeIcon icon={faCloud} />;
  } else {
    weatherIcon = <FontAwesomeIcon icon={faSmog} />;
  }

  return (
    <div className="Results">
      <div className="LocationWrapper">
        <h1 className="BigLabel" style={{ textAlign: "left" }}>
          {city}, {country}
        </h1>
        <h3 className="SmallLabel" style={{ weight: "400" }}>
          {date}
        </h3>
      </div>
      <div className="CurrentWeatherWrapper">
        <div className="WeatherIcon">{weatherIcon}</div>
        <div className="TemperatureWrapper">
          <h3 className="Temperature">{Math.floor(temp)}&#176;</h3>
          <h3 className="SmallLabel" style={{ weight: "400" }} firstToUpperCase>
            {description}
          </h3>
        </div>
      </div>
      <div className="WeatherDetailsWrapper">
        <div className="WeatherDetail">
          <h3
            className="SmallLabel"
            style={{ textAlign: "center", weight: "400" }}
          >
            {Math.floor(highestTemp)}&#176;
          </h3>
          <span className="Text" style={{ textAlign: "center" }}>
            Hight
          </span>
        </div>
        <div className="WeatherDetail">
          <h3
            className="SmallLabel"
            style={{ textAlign: "center", weight: "400" }}
          >
            {wind}mph
          </h3>
          <span className="Text" style={{ textAlign: "center" }}>
            Wind
          </span>
        </div>
        <div className="WeatherDetail">
          <h3
            className="SmallLabel"
            style={{ textAlign: "center", weight: "400" }}
          >
            {sunrise}
          </h3>
          <span className="Text" style={{ textAlign: "center" }}>
            Sunrise
          </span>
        </div>
        <div className="WeatherDetail">
          <h3
            className="SmallLabel"
            style={{ textAlign: "center", weight: "400" }}
          >
            {Math.floor(lowestTemp)}&#176;
          </h3>
          <span className="Text" style={{ textAlign: "center" }}>
            Low
          </span>
        </div>
        <div className="WeatherDetail">
          <h3
            className="SmallLabel"
            style={{ textAlign: "center", weight: "400" }}
          >
            {humidity}%
          </h3>
          <span className="Text" style={{ textAlign: "center" }}>
            Rain
          </span>
        </div>
        <div className="WeatherDetail">
          <h3
            className="SmallLabel"
            style={{ textAlign: "center", weight: "400" }}
          >
            {sunset}
          </h3>
          <span className="Text" style={{ textAlign: "center" }}>
            Sunset
          </span>
        </div>
      </div>
      <div className="ForecastWrapperOut">
        <h2 className="MediumLabel" style={{ weight: "400" }}>
          Forecast
        </h2>
        <div className="Forecast">{forecasts}</div>
      </div>
    </div>
  );
};

export default Result;
