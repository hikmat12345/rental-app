import axios from "axios";
import decode from "jwt-decode";
// const token = sessionStorage.getItem("loginToken");
let token = sessionStorage.getItem("loginToken");
export default axios.create({
  baseURL: "http://18.117.223.241:6003/",
  // baseURL: "http://192.168.100.22:6003/",
  headers: { Authorization: token },
});
