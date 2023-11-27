import React from "react";
import styles from "./Chips.module.css";
function Chips({ categories, setCategories }) {
  const handleClick = (e) => {
    const id = e.target.parentElement.firstChild.innerText;
    if (categories.includes(id)) {
      const index = categories.indexOf(id);
      categories.splice(index, 1);
      setCategories([...categories]);
    }
  };
  return (
    <>
      {categories.map((category, indx) => (
        <div key={indx} className={styles.chipContainer}>
          <p>{category}</p>
          <p onClick={(e) => handleClick(e)}>X</p>
        </div>
      ))}
    </>
  );
}

export default Chips;
