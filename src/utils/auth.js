import Axios from "axios";

export function auth() {
  return axios.post(
    "/get-token",
    {},
    {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    },
  );
}

export const axios = Axios.create({
  baseURL: "http://belajar-laravel-api.test/api",
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
    Authorization: localStorage.getItem("token")
      ? "Bearer " + localStorage.getItem("token")
      : "",
  },
});
