import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getNews = async () => {
  try {
    const apiKey = "d8b4b68773094725bfa7283df891928c";
    const country = "in";
    const reqUrl = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;
    const response = await axios.get(reqUrl);
    return response;
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong in fetching News! Please try again!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};
