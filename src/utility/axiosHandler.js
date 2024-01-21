import axios from "axios";

const axiosHandler = async (method, api, data = null, params = null) => {
  // Add your token here, add auth token if authenticated else no auth is added
  const token = sessionStorage.getItem("yourAuthTokenKey");

  const headers = {
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : "",
  };

  const axiosConfig = {
    method,
    url: `https://jsonplaceholder.typicode.com/${api}`,
    headers,
    data,
    params,
  };

  try {
    const response = await axios(axiosConfig);
    return {
      data: response.data,
      isError: false,
    };
  } catch (error) {
    return {
      isError: true,
      message: error,
    };
  }
};

export default axiosHandler;
