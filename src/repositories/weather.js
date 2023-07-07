import axios from "axios";

const weatherUrl = import.meta.env.VITE_API_FORECAST_URL;


// assign token if authorized
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");

export const getLocation = () => {
  const options = {
    method: "get",
    url: `${endpoint}`,
  };
  return axios(options);
};

export const getWeatherbyLocation= (city) => {
  const options = {
    method: "get",
    url: `${weatherUrl}/${city}/summary/`,
    headers: {
      'X-RapidAPI-Key': '1fc357ae7bmsh5088f777a28158ep149262jsn737dce673fee',
      'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
    }
  };
  return axios(options);
};
