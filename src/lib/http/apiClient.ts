import axios from "axios"
import Cookies from "js-cookie"
import { setupAuthInterceptor } from "./auth.interceptor"

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

apiClient.interceptors.request.use((config) => {
  const token = Cookies.get("access_token")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

setupAuthInterceptor(apiClient)
