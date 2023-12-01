import React from "react";
import ProfileCard from "../components/HomePage/ProfileCard";
import WeatherCard from "../components/HomePage/WeatherCard";
import NewsCard from "../components/HomePage/NewsCard";
function HomePage() {
  return (
    <>
      <div
        style={{
          display: "grid",
          height: "90vh",
          gridTemplateColumns: "55% 25%",
          gridTemplateRows: "65% 32%",
          rowGap: "20px",
          columnGap: "50px",
          margin: "30px",
          justifyContent: "center",
        }}
      >
        <ProfileCard />
        <WeatherCard />
        <NewsCard />
      </div>
    </>
  );
}

export default HomePage;
