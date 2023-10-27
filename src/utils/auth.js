import Axios from "axios";

export function auth() {
  return axios.post(
    "/get-token",
    {},
    {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
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
  },
});
