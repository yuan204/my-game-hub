import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2b695d8b42e140ae82459db3fe27ffbb",
  },
});
