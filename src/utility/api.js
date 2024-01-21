import axiosHandler from "./axiosHandler";
const api = {
  hr: {
    getJobs: () => {
      return axiosHandler("GET", "todos");
    },
  },
};

export default api;
