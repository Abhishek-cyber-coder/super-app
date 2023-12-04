import React, { useEffect, useState } from "react";
import styles from "./WeatherCard.module.css";
import windIcon from "../../assets/ICONS/wind.svg";
import humidityIcon from "../../assets/ICONS/humidity.svg";
import {
  getDateAsDDMMYYYYFormat,
  getTimeAsAmPmFormat,
} from "../../utils/helper";
import { getWeatherDetails } from "../../apis/weather";
function WeatherCard() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [weatherReport, setWeatherReport] = useState({
    currentCondition: "",
    conditionIcon: "",
    windSpeed: "",
    humidity: "",
    temp: "",
    mbarPressure: "",
  });

  const fetchWeatherDetails = async () => {
    const response = await getWeatherDetails();
    setWeatherReport({
      currentCondition: response.data.current.condition.text,
      conditionIcon: response.data.current.condition.icon,
      windSpeed: response.data.current.wind_kph + " km/h",
      humidity: response.data.current.humidity + "%",
      temp: response.data.current.temp_c,
      mbarPressure: response.data.current.pressure_mb,
    });
    console.log(response.data.current.pressure_mb);
  };

  useEffect(() => {
    fetchWeatherDetails();
  }, []);

  useEffect(() => {
    const fetchDate = getDateAsDDMMYYYYFormat();
    setDate(fetchDate);
  });

  useEffect(() => {
    const fetchTime = getTimeAsAmPmFormat();
    setTime(fetchTime);
  });

  return (
    <div className={styles.weatherCard}>
      <div className={styles.topDateAndTimeBar}>
        <div className={styles.date}>{date}</div>
        <div className={styles.time}>{time}</div>
      </div>
      <div className={styles.weatherReport}>
        <div className={`${styles.weatherCondition} ${styles.addFlex}`}>
          <img style={{ width: "90px" }} src={weatherReport.conditionIcon} />
          <p>{weatherReport.currentCondition}</p>
        </div>
        <div className={styles.dash}></div>
        <div className={`${styles.tempAndPressure} ${styles.addFlex}`}>
          <p>
            {weatherReport.temp}
            <span>°C</span>
          </p>
          <div>
            <span style={{ color: "white", fontSize: "35px" }}>&#127777;</span>
            <span>
              {weatherReport.mbarPressure}
              &nbsp;mbar Pressure
            </span>
          </div>
        </div>
        <div className={styles.dash}></div>
        <div className={`${styles.windAndHumidity} ${styles.addFlex}`}>
          <div>
            <img src={windIcon} />
            <span>{weatherReport.windSpeed} Wind </span>
          </div>
          <div>
            <img src={humidityIcon} />
            <span>&nbsp;{weatherReport.humidity} Humidity</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
