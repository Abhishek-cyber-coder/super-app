import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const getWeatherDetails = async () => {
  try {
    const defaultLocation = "Haridwar";
    const apiKey = "4bc155ad791c409591c101708230112";
    const reqUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${defaultLocation}`;
    const response = await axios.get(reqUrl);
    return response;
  } catch (error) {
    console.log(error);
    toast.error(
      "Something went wrong in fetching Weather details! Please try again!",
      {
        position: toast.POSITION.BOTTOM_LEFT,
      }
    );
  }
};
