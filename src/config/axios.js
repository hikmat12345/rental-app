import axios from "axios";
const axiosInstance = () => {
  const token = localStorage.getItem("beeyondboats");
  return axios.create({
    baseURL: "http://18.117.223.241:6003/",
    data: [],
    headers: {
      authorization: token ? `${token}` : null,
    },
  });
};

export default axiosInstance;
