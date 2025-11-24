import axios from "axios";

export default axios.create({
    baseURL: "https://trina-overmild-cristobal.ngrok-free.dev",
    withCredentials: true,
})