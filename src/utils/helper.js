export const getDateAsMMDDYYYYFormat = () => {
  const date = new Date();
  let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  let month =
    date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
  let year = date.getFullYear();
  let dateAsMMDDYYYY = `${month}-${day}-${year}`;
  return dateAsMMDDYYYY;
};

export const getTimeAsAmPmFormat = () => {
  const time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  min = min < 10 ? "0" + min : min;
  let amOrPm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  hour = hour ? hour : 12;
  hour = hour < 10 ? "0" + hour : hour;
  let timeAsAmPm = `${hour}:${min} ${amOrPm}`;
  return timeAsAmPm;
};
