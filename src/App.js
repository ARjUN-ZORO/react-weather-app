import React, { Component } from "react";

import Result from "./components/result";
import Search from "./components/search";

const key = "50321932bb66b4d5adfac165b9940bb7";

class App extends Component {
  state = {
    value: "",
    weatherInfo: null,
    error: false,
    key: "50321932bb66b4d5adfac165b9940bb7",
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  handleSearchCity = (e) => {
    e.preventDefault();
    const { value, key } = this.state;

    const weather = `https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=${key}&units=metric`;
    const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&APPID=${key}&units=metric`;
    Promise.all([fetch(weather), fetch(forecast)])
      .then(([res1, res2]) => {
        if (res1.ok && res2.ok) {
          return Promise.all([res1.json(), res2.json()]);
        }
        throw Error(res1.statusText, res2.statusText);
      })
      .then(([data1, data2]) => {
        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "Nocvember",
          "December",
        ];
        const days = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        const currentDate = new Date();
        const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${
          months[currentDate.getMonth()]
        }`;
        const sunset = new Date(data1.sys.sunset * 1000)
          .toLocaleTimeString()
          .slice(0, 5);
        const sunrise = new Date(data1.sys.sunrise * 1000)
          .toLocaleTimeString()
          .slice(0, 5);
        const weatherInfo = {
          city: data1.name,
          country: data1.sys.country,
          date,
          description: data1.weather[0].description,
          main: data1.weather[0].main,
          temp: data1.main.temp,
          highestTemp: data1.main.temp_max,
          lowestTemp: data1.main.temp_min,
          sunrise,
          sunset,
          clouds: data1.clouds.all,
          humidity: data1.main.humidity,
          wind: data1.wind.speed,
          forecast: data2.list,
        };
        this.setState({
          weatherInfo,
          error: false,
        });
      })
      .catch((error) => {
        console.log(error);

        this.setState({
          error: true,
          weatherInfo: null,
        });
      });
  };

  render() {
    const { value, weatherInfo, error } = this.state;
    return (
      <div>
        <main>
          {typeof weatherInfo != "undefined" ? (
            <h1 className="AppTitle secondary">Weather app</h1>
          ) : (
            ""
          )}
          <div className="WeatherWrapper">
            {typeof weatherInfo === "undefined" ? (
              <h1 className="AppTitle">Weather app</h1>
            ) : (
              ""
            )}
            <Search
              value={value}
              showResult={(weatherInfo || error) && true}
              change={this.handleInputChange}
              submit={this.handleSearchCity}
            />
            {weatherInfo && <Result weather={weatherInfo} />}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
