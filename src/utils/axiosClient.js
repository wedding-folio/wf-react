import axios from "axios"

export default function axiosClient() {
  return axios.create({
    baseURL: "http://localhost:2019/api"
  })
}