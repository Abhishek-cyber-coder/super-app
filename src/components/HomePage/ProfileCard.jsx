import React from "react";
import styles from "./ProfileCard.module.css";
function ProfileCard() {
  const userInfo = JSON.parse(localStorage.getItem("userData"));
  const genres = JSON.parse(localStorage.getItem("genres"));

  return (
    <div className={styles.ProfileCard}>
      <div className={styles.profilePic}></div>
      <div className={styles.profileInfo}>
        <p className={`${styles.name} ${styles.paraCss}`}>{userInfo.name}</p>
        <p className={`${styles.mailId} ${styles.paraCss}`}>{userInfo.mail}</p>
        <p className={`${styles.username} ${styles.paraCss}`}>
          {userInfo.username}
        </p>
        <div className={styles.genresContainer}>
          {genres.map((data, indx) => (
            <div key={indx} className={styles.item}>
              <p>{data}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
