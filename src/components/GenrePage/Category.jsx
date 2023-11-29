import React, { useState } from "react";
import warningLogo from "../../assets/ICONS/warning.svg";
import styles from "./Category.module.css";
import action from "../../assets/Images/categories/action.png";
import drama from "../../assets/Images/categories/drama.png";
import romance from "../../assets/Images/categories/romance.png";
import thriller from "../../assets/Images/categories/thriller.png";
import western from "../../assets/Images/categories/western.png";
import horror from "../../assets/Images/categories/horror.png";
import fantasy from "../../assets/Images/categories/fantasy.png";
import music from "../../assets/Images/categories/music.png";
import fiction from "../../assets/Images/categories/fiction.png";

import Chips from "../Global/Chips";
import CategoryItem from "../Global/CategoryItem";
import { useNavigate } from "react-router-dom";
function Category() {
  const [categories, setCategories] = useState([]);
  const [lengthError, setLengthError] = useState(false);
  const navigate = useNavigate();

  const handleSubmitBtn = () => {
    if (!(categories.length >= 3)) {
      setLengthError(true);
      return;
    } else {
      setLengthError(false);
      window.localStorage.setItem("genres", JSON.stringify([...categories]));
      navigate("/");
    }
  };

  const genres = [
    {
      id: "Action",
      color: "#FF5209",
      image: (
        <img
          style={{ margin: "0 auto", height: "105px", width: "170px" }}
          src={action}
        />
      ),
    },
    {
      id: "Drama",
      color: "#D7A4FF",
      image: (
        <img
          style={{ margin: "0 auto", height: "105px", width: "170px" }}
          src={drama}
        />
      ),
    },
    {
      id: "Romance",
      color: "#148A08",
      image: (
        <img
          style={{ margin: "0 auto", height: "105px", width: "170px" }}
          src={romance}
        />
      ),
    },
    {
      id: "Thriller",
      color: "#84C2FF",
      image: (
        <img
          style={{ margin: "0 auto", height: "105px", width: "170px" }}
          src={thriller}
        />
      ),
    },
    {
      id: "Western",
      color: "#902500",
      image: (
        <img
          style={{ margin: "0 auto", height: "105px", width: "170px" }}
          src={western}
        />
      ),
    },
    {
      id: "Horror",
      color: "#7358FF",
      image: (
        <img
          style={{ margin: "0 auto", height: "105px", width: "170px" }}
          src={horror}
        />
      ),
    },
    {
      id: "Fantasy",
      color: "#FF4ADE",
      image: (
        <img
          style={{ margin: "0 auto", height: "105px", width: "170px" }}
          src={fantasy}
        />
      ),
    },
    {
      id: "Music",
      color: "#E61E32",
      image: (
        <img
          style={{ margin: "0 auto", height: "105px", width: "170px" }}
          src={music}
        />
      ),
    },
    {
      id: "Fiction",
      color: "#6CD061",
      image: (
        <img
          style={{ margin: "0 auto", height: "105px", width: "170px" }}
          src={fiction}
        />
      ),
    },
  ];
  return (
    <div style={{ display: "flex" }}>
      <div className={styles.wrapperForLeftSec}>
        <p className={styles.LogoOfApp}>Super app</p>
        <p className={styles.textOnLeftSec}>
          Choose your entertainment category
        </p>
        <div className={styles.selectedCategories}>
          <Chips categories={categories} setCategories={setCategories} />
        </div>
        {lengthError ? (
          <div>
            <img
              style={{ height: "25px" }}
              src={warningLogo}
              alt="Warning Logo"
            />
            <p className={styles.warningText}>Minimum 3 category required </p>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className={styles.wrapperForRightSec}>
        <div className={styles.itemsGrid}>
          {genres.map((data, indx) => (
            <CategoryItem
              key={indx}
              data={data}
              idx={indx}
              categories={categories}
              setCategories={setCategories}
            />
          ))}
        </div>
        <button className={styles.nextPageBtn} onClick={handleSubmitBtn}>
          Next Page
        </button>
      </div>
    </div>
  );
}

export default Category;
