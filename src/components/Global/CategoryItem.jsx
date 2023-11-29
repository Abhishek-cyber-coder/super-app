import React, { useEffect, useState } from "react";
import styles from "./CategoryItem.module.css";
function CategoryItem({ data, idx, categories, setCategories }) {
  const [selected, setSelected] = useState();
  const handleClick = () => {
    if (categories.includes(data.id)) {
      const index = categories.indexOf(data.id);
      categories.splice(index, 1);
      setCategories([...categories]);
    } else {
      setCategories([...categories, data.id]);
    }
    setSelected(!selected);
  };
  useEffect(() => {
    setSelected(categories.includes(data.id) == true);
  });
  return (
    <div
      key={idx}
      style={{
        backgroundColor: `${data.color}`,
        border: `${selected ? "4px solid #11B800" : "4px solid white"}`,
      }}
      className={styles.item}
      onClick={handleClick}
    >
      <p>{data.id}</p>
      {data.image}
    </div>
  );
}

export default CategoryItem;
