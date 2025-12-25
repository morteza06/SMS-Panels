import axios from "axios"
import { setupAuthInterceptor } from "./auth.interceptor"

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
})

setupAuthInterceptor(apiClient)
