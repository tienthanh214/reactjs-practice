import axios from "axios";

// setup authentication header here ...
const myAxios = axios.create({
  headers: {
    'Accept': 'application/json,application/x-www-form-urlencoded,text/plain,*/*',
    'Content-Type': 'application/json;charset=utf-8',
  },
})

export const makeRequest = async function (method = "GET", url = "", data) {
  if (method === "POST") {
    return myAxios.post(url, data)
  } else {
    return myAxios.get(url)
  }
};
