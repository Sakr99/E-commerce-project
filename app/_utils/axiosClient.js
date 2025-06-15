import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;

const axiosClient = axios.create({
  baseURL: `${apiUrl}/api`, 
  headers: {
    Authorization: apiKey ? `Bearer ${apiKey}` : undefined,
    "Content-Type": "application/json",
  },
});

export default axiosClient;
