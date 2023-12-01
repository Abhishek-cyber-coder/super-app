import React, { useEffect, useMemo, useState } from "react";
import placeholderImage from "../../assets/Images/placeholderImage.jpg";
import styles from "./NewsCard.module.css";
import { getNews } from "../../apis/news";
import { ToastContainer } from "react-toastify";
import {
  getDateAsMMDDYYYYFormat,
  getTimeAsAmPmFormat,
} from "../../utils/helper";

function NewsCard() {
  const [newsData, setNewsData] = useState({});
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fakeNews = {
    urlToImage:
      "https://readwrite.com/wp-content/uploads/2023/11/Bitcoin-Minetrix.jpg",
    content:
      "Bitcoin Minetrix is a crypto project aiming to bring Bitcoin mining to the masses using an innovative feature called stake-to-mine. You no longer need expensive Bitcoin mining hardware and electricit… ",
    url: "https://readwrite.com/cryptocurrency/how-to-buy-bitcoin-minetrix/",
    title: "How to Buy Bitcoin Minetrix in 2023 – Complete Guide",
  };

  const generateRandomNum = (len) => {
    const index = Math.floor(Math.random() * len);
    return index;
  };

  const fetchNews = async () => {
    setIsLoading(true);
    const response = await getNews();
    setIsLoading(false);
    const len = response?.data.articles.length;
    const index = generateRandomNum(len);
    if (response?.data.articles[index].content !== null) {
      setNewsData(response?.data.articles[index]);
    } else {
      setNewsData(fakeNews);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    const fetchDateInMMDDYYYYFormat = getDateAsMMDDYYYYFormat();
    setDate(fetchDateInMMDDYYYYFormat);
  });

  useEffect(() => {
    const fetchTimeInAmPmFormat = getTimeAsAmPmFormat();
    setTime(fetchTimeInAmPmFormat);
  });

  const handleTextLength = (data) => {
    let index = data.indexOf("[");
    let text = index !== -1 ? data.substring(0, index) : data;
    return text;
  };

  return (
    <div className={styles.newsCard}>
      <ToastContainer />
      <div
        className={styles.newsImage}
        style={{
          height: "35%",
        }}
      >
        {isLoading ? (
          <svg
            version="1.1"
            id="L5"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enableBackground="new 0 0 0 0"
            xmlSpace="preserve"
          >
            <circle fill="#5746EA" stroke="none" cx="6" cy="50" r="6">
              <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 15 ; 0 -15; 0 15"
                repeatCount="indefinite"
                begin="0.1"
              />
            </circle>
            <circle fill="#5746EA" stroke="none" cx="30" cy="50" r="6">
              <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 10 ; 0 -10; 0 10"
                repeatCount="indefinite"
                begin="0.2"
              />
            </circle>
            <circle fill="#5746EA" stroke="none" cx="54" cy="50" r="6">
              <animateTransform
                attributeName="transform"
                dur="1s"
                type="translate"
                values="0 5 ; 0 -5; 0 5"
                repeatCount="indefinite"
                begin="0.3"
              />
            </circle>
          </svg>
        ) : (
          <img
            src={
              newsData.urlToImage !== null
                ? newsData.urlToImage
                : placeholderImage
            }
          />
        )}

        <div className={styles.titleSpace}>
          <p className={styles.title}>{newsData.title}</p>
          <p className={styles.dateAndTime}>
            <span>{date}</span> | <span>{time}</span>
          </p>
        </div>
        <p className={styles.textContent}>
          {newsData.content !== undefined
            ? handleTextLength(newsData.content)
            : "Loading..."}
        </p>

        <a className={styles.readmoreBtn} href={newsData.url} target="_blank">
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsCard;
