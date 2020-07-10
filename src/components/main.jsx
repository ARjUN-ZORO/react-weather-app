import React from "react";

const Main = (props) => {
  console.log(props.data);
  return (
    <div>
      <div className="location-and-date">
        <h1 className="location-and-date__location">
          {props.data.name}, {props.data.sys.country}
        </h1>
        <div>Sunday 4th August</div>
      </div>

      <div className="current-temperature">
        <div className="current-temperature__icon-container">
          <img
            src="icons/mostly-sunny.svg"
            className="current-temperature__icon"
            alt=""
          />
        </div>
        <div className="current-temperature__content-container">
          <div className="current-temperature__value">
            {Math.round(props.data.main.temp)}&deg;
          </div>
          <div className="current-temperature__summary">
            {props.data.weather[0].main}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
