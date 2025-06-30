import axios, { AxiosError } from "axios";
import { API_ENDPOINTS } from "@/constants/auth.api";
import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  clearTokens,
} from "./cookie-utils";
import { API_BASE_URL } from "@/constants";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  withCredentials: true,
});

// Request interceptor
api.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = getRefreshToken();
        if (!refreshToken) throw new Error("No refresh token");

        const response = await axios.post(
          `${API_BASE_URL}${API_ENDPOINTS.REFRESH_TOKEN}`,
          {
            refreshToken,
          }
        );

        const { accessToken } = response.data.data;
        setAccessToken(accessToken);

        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        clearTokens();
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export async function apiCall(
  endpoint: string,
  data?: unknown,
  method: "GET" | "POST" | "PATCH" | "DELETE" = "GET"
) {
  try {
    let response;
    switch (method) {
      case "POST":
        response = await api.post(endpoint, data);
        break;
      case "PATCH":
        response = await api.patch(endpoint, data);
        break;
      case "DELETE":
        response = await api.delete(endpoint);
        break;
      default:
        response = await api.get(endpoint, { params: data });
    }
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw {
        message:
          error.response?.data?.message ||
          "Something went wrong! check api-client.ts",
        status: error.response?.status,
        error: error.response?.data?.error,
        errorCode: error.response?.data?.errorCode,
      };
    }
    throw new Error("Something went wrong!");
  }
}

export default api;
